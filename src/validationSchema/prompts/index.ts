import * as yup from 'yup';

export const promptValidationSchema = yup.object().shape({
  content: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
