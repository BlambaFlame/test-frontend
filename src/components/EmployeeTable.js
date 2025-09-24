import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeTable = ({ employees }) => {
  const navigate = useNavigate();
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleViewClick = (employeeId) => {
    navigate(`/profile/${employeeId}`);
  };

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedEmployees = [...employees].sort((a, b) => {
    if (!sortField) return 0;

    const aValue = a[sortField];
    const bValue = b[sortField];

    if (typeof aValue === 'string') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    } else {
      return sortDirection === 'asc' 
        ? aValue - bValue
        : bValue - aValue;
    }
  });

  const SortIcon = ({ field }) => {
    if (sortField !== field) return <span className="sort-icon">↕</span>;
    return (
      <span className="sort-icon">
        {sortDirection === 'asc' ? '↑' : '↓'}
      </span>
    );
  };

  const formatSalary = (salary) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(salary);
  };

  const formatPhone = (phone) => {
    return phone.replace(/(\+\d)(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5');
  };

  return (
    <div className="employee-table-container">
      <div className="table-responsive">
        <table className="employee-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('firstName')}>
                <div className="th-content">
                  ФИО
                  <SortIcon field="firstName" />
                </div>
              </th>
              <th onClick={() => handleSort('position')}>
                <div className="th-content">
                  Должность
                  <SortIcon field="position" />
                </div>
              </th>
              <th onClick={() => handleSort('department')}>
                <div className="th-content">
                  Отдел
                  <SortIcon field="department" />
                </div>
              </th>
              <th onClick={() => handleSort('email')}>
                <div className="th-content">
                  Email
                  <SortIcon field="email" />
                </div>
              </th>
              <th>Телефон</th>
              <th onClick={() => handleSort('salary')}>
                <div className="th-content">
                  Зарплата
                  <SortIcon field="salary" />
                </div>
              </th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {sortedEmployees.map(employee => (
              <tr key={employee.id}>
                <td>
                  <div className="employee-info">
                    <img 
                      src={employee.avatar} 
                      alt={`${employee.firstName} ${employee.lastName}`}
                      className="employee-avatar"
                      onError={(e) => {
                        e.target.src = 'https://ui-avatars.com/api/?name=' + 
                          encodeURIComponent(employee.firstName + ' ' + employee.lastName) +
                          '&background=667eea&color=fff';
                      }}
                    />
                    <div className="employee-name">
                      <div className="full-name">
                        {employee.firstName} {employee.lastName}
                      </div>
                      <div className="employee-id">ID: {employee.id}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="position-badge">{employee.position}</span>
                </td>
                <td>
                  <span className="department-tag">{employee.department}</span>
                </td>
                <td>
                  <a 
                    href={`mailto:${employee.email}`}
                    className="email-link"
                  >
                    {employee.email}
                  </a>
                </td>
                <td>
                  <a 
                    href={`tel:${employee.phone.replace(/\D/g, '')}`}
                    className="phone-link"
                  >
                    {formatPhone(employee.phone)}
                  </a>
                </td>
                <td>
                  <span className="salary-amount">
                    {formatSalary(employee.salary)}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="btn-view"
                      onClick={() => handleViewClick(employee.id)}
                      title="Просмотреть профиль"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      Просмотреть
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {employees.length === 0 && (
        <div className="table-empty">
          <div className="empty-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <p>Нет данных для отображения</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;