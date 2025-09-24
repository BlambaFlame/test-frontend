import React from 'react';

const Filters = ({ filters, onFilterChange, employees }) => {
  const departments = [...new Set(employees.map(emp => emp.department))];
  const positions = [...new Set(employees.map(emp => emp.position))];

  return (
    <div className="filters">
      <select
        value={filters.department}
        onChange={(e) => onFilterChange('department', e.target.value)}
      >
        <option value="">Все отделы</option>
        {departments.map(dept => (
          <option key={dept} value={dept}>{dept}</option>
        ))}
      </select>

      <select
        value={filters.position}
        onChange={(e) => onFilterChange('position', e.target.value)}
      >
        <option value="">Все должности</option>
        {positions.map(pos => (
          <option key={pos} value={pos}>{pos}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;