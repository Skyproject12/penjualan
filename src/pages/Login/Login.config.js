import * as yup from 'yup';

const ValidateFormik = yup.object().shape({
  username: yup.string().required('tolong masukkan username'),
  password: yup.string().required('tolong masukkan password'),
});

export default ValidateFormik;
