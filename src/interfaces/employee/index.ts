import { PerformanceEvaluationInterface } from 'interfaces/performance-evaluation';
import { TimeTrackingInterface } from 'interfaces/time-tracking';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  name: string;
  position: string;
  user_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  performance_evaluation?: PerformanceEvaluationInterface[];
  time_tracking?: TimeTrackingInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    performance_evaluation?: number;
    time_tracking?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  position?: string;
  user_id?: string;
  organization_id?: string;
}
