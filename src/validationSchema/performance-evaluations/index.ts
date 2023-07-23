import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  employee_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
