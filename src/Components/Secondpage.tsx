import React from "react";
import Component1 from "./Component1";
import DepartmentList from "./DepartmentList";
import { Department } from "../interfaces";

const Secondpage: React.FC = () => {
  const departments: Department[] = [
    {
      id: 1,
      name: "Customer Services",
      subDepartments: [
        { id: 11, name: "Support" },
        { id: 12, name: "Customer Success" }
      ]
    },
    {
      id: 2,
      name: "Design",
      subDepartments: [
        { id: 21, name: "Graphic Design" },
        { id: 22, name: "Product Design" },
        { id: 23, name: "Web Design" }
      ]
    },
    {
      id: 3,
      name: "Agriculture and Fishing",
      subDepartments: [
        { id: 31, name: "Agriculture" },
        { id: 32, name: "Crops" },
        { id: 33, name: "Farming Animals and Livestock" },
        { id: 34, name: "Fishery and Aquaculture" },
        { id: 35, name: "Ranching" },
      ]
    }
  ];

    return (
        <>
            <Component1/>
            <h1>Department List</h1>
            <DepartmentList departments={departments} />
        </>
    )
}


export default Secondpage