import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import { employees, updateEmployee, deleteEmployee } from '../data/employees';

const ProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundEmployee = employees.find(emp => emp.id === parseInt(id));
      setEmployee(foundEmployee);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

  const handleSave = (updatedData) => {
    const updatedEmployee = updateEmployee(employee.id, {
      ...updatedData,
      skills: updatedData.skills.split(',').map(skill => skill.trim())
    });
    
    setEmployee(updatedEmployee);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить этого сотрудника? Это действие нельзя отменить.')) {
      deleteEmployee(employee.id);
      navigate('/', { 
        state: { message: 'Сотрудник успешно удален', type: 'success' }
      });
    }
  };

  const calculateExperience = (hireDate) => {
    const hire = new Date(hireDate);
    const now = new Date();
    const years = now.getFullYear() - hire.getFullYear();
    const months = now.getMonth() - hire.getMonth();
    
    if (months < 0) {
      return `${years - 1} лет ${12 + months} мес.`;
    }
    return `${years} лет ${months} мес.`;
  };

  if (isLoading) {
    return (
      <div className="main-content">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Загрузка профиля...</p>
        </div>
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="main-content">
        <div className="error-state">
          <div className="error-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </div>
          <h3>Сотрудник не найден</h3>
          <p>Запрошенный профиль не существует или был удален</p>
          <Link to="/" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Вернуться к списку
          </Link>
        </div>
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="main-content">
        <div className="profile-content">
          <div className="profile-actions">
            <button onClick={() => setIsEditing(false)} className="back-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Назад к просмотру
            </button>
            <div className="action-buttons">
              <button 
                onClick={() => setIsEditing(false)}
                className="btn-secondary"
              >
                Отмена
              </button>
              <button 
                type="submit"
                form="employee-form"
                className="btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                  <polyline points="17 21 17 13 7 13 7 21"></polyline>
                  <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
                Сохранить
              </button>
            </div>
          </div>

          <EmployeeForm
            employee={employee}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
            isEdit={true}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="profile-content">
        <div className="profile-actions">
          <Link to="/" className="back-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Назад к списку
          </Link>
          <div className="action-buttons">
            <button 
              onClick={() => setIsEditing(true)}
              className="btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              Редактировать
            </button>
            <button 
              onClick={handleDelete}
              className="btn-danger"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
              Удалить
            </button>
          </div>
        </div>

        <div className="profile-header">
          <img 
            src={employee.avatar} 
            alt={`${employee.firstName} ${employee.lastName}`}
            className="profile-avatar"
            onError={(e) => {
              e.target.src = 'https://ui-avatars.com/api/?name=' + 
                encodeURIComponent(employee.firstName + ' ' + employee.lastName) +
                '&background=667eea&color=fff&size=200';
            }}
          />
          <div className="profile-info">
            <h1>{employee.firstName} {employee.lastName}</h1>
            <p className="profile-position">{employee.position}</p>
            <div className="profile-meta">
              <span className="meta-item">
                <strong>ID:</strong> #{employee.id}
              </span>
              <span className="meta-item">
                <strong>В компании:</strong> {calculateExperience(employee.hireDate)}
              </span>
              <span className="meta-item">
                <strong>Отдел:</strong> {employee.department}
              </span>
            </div>
          </div>
        </div>

        <div className="profile-details">
          <div className="details-grid">
            <div className="detail-section">
              <h2>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Контактная информация
              </h2>
              <div className="detail-items">
                <div className="detail-item">
                  <strong>Email:</strong>
                  <a href={`mailto:${employee.email}`} className="contact-link">
                    {employee.email}
                  </a>
                </div>
                <div className="detail-item">
                  <strong>Телефон:</strong>
                  <a href={`tel:${employee.phone.replace(/\D/g, '')}`} className="contact-link">
                    {employee.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h2>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                Рабочая информация
              </h2>
              <div className="detail-items">
                <div className="detail-item">
                  <strong>Должность:</strong>
                  <span className="position-badge large">{employee.position}</span>
                </div>
                <div className="detail-item">
                  <strong>Отдел:</strong>
                  <span className="department-tag large">{employee.department}</span>
                </div>
                <div className="detail-item">
                  <strong>Зарплата:</strong>
                  <span className="salary-amount large">
                    {new Intl.NumberFormat('ru-RU', {
                      style: 'currency',
                      currency: 'RUB',
                      minimumFractionDigits: 0
                    }).format(employee.salary)}
                  </span>
                </div>
                <div className="detail-item">
                  <strong>Дата найма:</strong>
                  <span>{new Date(employee.hireDate).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h2>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                Навыки и компетенции
              </h2>
              <div className="skills-container">
                {employee.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h2>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="20" x2="12" y2="10"></line>
                  <line x1="18" y1="20" x2="18" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="16"></line>
                </svg>
                Статистика
              </h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-value">{calculateExperience(employee.hireDate).split(' ')[0]}</div>
                  <div className="stat-label">лет опыта</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">{employee.skills.length}</div>
                  <div className="stat-label">навыков</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">
                    {new Date().getFullYear() - new Date(employee.hireDate).getFullYear()}
                  </div>
                  <div className="stat-label">лет в компании</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;