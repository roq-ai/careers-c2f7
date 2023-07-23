import { EmployeeInterface } from 'interfaces/employee';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceEvaluationInterface {
  id?: string;
  rating: number;
  employee_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface PerformanceEvaluationGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  organization_id?: string;
}
