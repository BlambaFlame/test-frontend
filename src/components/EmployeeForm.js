import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ employee, onSave, onCancel, isEdit = false }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    position: '',
    department: '',
    email: '',
    phone: '',
    salary: '',
    hireDate: '',
    skills: '',
    avatar: ''
  });

  useEffect(() => {
    if (employee && isEdit) {
      setFormData({
        firstName: employee.firstName || '',
        lastName: employee.lastName || '',
        position: employee.position || '',
        department: employee.department || '',
        email: employee.email || '',
        phone: employee.phone || '',
        salary: employee.salary || '',
        hireDate: employee.hireDate || '',
        skills: employee.skills ? employee.skills.join(', ') : '',
        avatar: employee.avatar || ''
      });
    }
  }, [employee, isEdit]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="employee-form">
      <h2>{isEdit ? 'Редактировать сотрудника' : 'Добавить сотрудника'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Имя:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Фамилия:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Должность:</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Отдел:</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Телефон:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Зарплата:</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Дата найма:</label>
            <input
              type="date"
              name="hireDate"
              value={formData.hireDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group" htmlFor="skills">
          <label htmlFor="skills">Навыки (через запятую):</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="JavaScript, React, Node.js"
            id="skills"
          />
        </div>

        <div className="form-group" htmlFor="avatar">
          <label htmlFor="avatar">Аватар (URL):</label>
          <input
            type="url"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            placeholder="https://example.com/avatar.jpg"
            id="avatar"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            {isEdit ? 'Сохранить' : 'Добавить'}
          </button>
          <button type="button" onClick={onCancel} className="btn-secondary">
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;