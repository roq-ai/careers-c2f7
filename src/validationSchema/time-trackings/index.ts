import * as yup from 'yup';

export const timeTrackingValidationSchema = yup.object().shape({
  hours: yup.number().integer().required(),
  employee_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
