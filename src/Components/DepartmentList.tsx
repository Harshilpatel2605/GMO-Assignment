import React, { useState, useEffect } from "react";
import { Department} from "../interfaces";
import "../Styles/departmentList.css";

interface Props {
  departments: Department[];
}

const DepartmentList: React.FC<Props> = ({ departments }) => {
  const [expandedDepartments, setExpandedDepartments] = useState<number[]>([]);
  const [checkedDepartments, setCheckedDepartments] = useState<{ [key: number]: boolean }>({});

  
  useEffect(() => {
    const initialChecked: { [key: number]: boolean } = {};
    departments.forEach(department => {
      initialChecked[department.id] = false;
      department.subDepartments?.forEach(subDept => {
        initialChecked[subDept.id] = false;
      });
    });
    setCheckedDepartments(initialChecked);
  }, [departments]);

  const toggleDepartment = (departmentId: number) => {
    if (expandedDepartments.includes(departmentId)) {
      setExpandedDepartments(expandedDepartments.filter(id => id !== departmentId));
    } else {
      setExpandedDepartments([...expandedDepartments, departmentId]);
    }
  };

  const handleDepartmentChange = (departmentId: number, checked: boolean) => {
    setCheckedDepartments(prevState => {
      const newState = { ...prevState, [departmentId]: checked };
      departments
        .find(department => department.id === departmentId)?.subDepartments
        ?.forEach(subDept => {
          newState[subDept.id] = checked;
        });
      return newState;
    });
  };

  const handleSubDepartmentChange = (subDeptId: number, checked: boolean) => {
    setCheckedDepartments(prevState => ({
      ...prevState,
      [subDeptId]: checked,
    }));
  };

  
  useEffect(() => {
    const updatedChecked = { ...checkedDepartments };
    departments.forEach(department => {
      if (department.subDepartments) {
        const allSubDeptsChecked = department.subDepartments.every(subDept => checkedDepartments[subDept.id]);
        updatedChecked[department.id] = allSubDeptsChecked;
      }
    });
    setCheckedDepartments(updatedChecked);
  }, [checkedDepartments, departments]);


  return (
    <div className="department-list">
      {departments.map(department => (
        <div key={department.id} className="department">
          <div className="department-header">
            <span className="icon" onClick={() => toggleDepartment(department.id)}>
              {expandedDepartments.includes(department.id) ? '▼' : '►'}
            </span>
            <input
              type="checkbox"
              checked={!!checkedDepartments[department.id]}
              onChange={(e) => handleDepartmentChange(department.id, e.target.checked)}
            />
            {department.name}
          </div>
          {expandedDepartments.includes(department.id) && (
            <div className="sub-departments">
              {department.subDepartments?.map(subDept => (
                <div key={subDept.id} className="sub-department">
                  <input
                    type="checkbox"
                    checked={!!checkedDepartments[subDept.id]}
                    onChange={(e) => handleSubDepartmentChange(subDept.id, e.target.checked)}
                  />
                  {subDept.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DepartmentList;
