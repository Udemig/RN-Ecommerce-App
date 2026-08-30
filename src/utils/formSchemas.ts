import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'En az iki karakter olarak giriniz!')
        .required('Zorunlu Alan'),
    password: Yup.string()
        .min(8, 'En az 8 karakter olarak giriniz!')
        .max(50, 'En fazla 50 karakter olarak giriniz!')
        .required('Zorunlu Alan'),
    email: Yup.string()
        .email('Geçersi e-posta adresi')
        .required('Zorunlu Alan'),
    phone: Yup.string()
        .min(11, 'En az 11 karakter olarak giriniz!')
        .required("Zorunlu Alan"),
    rePassword: Yup.string()
        .required("Zorunlu alan")
        .oneOf([Yup.ref("password")], "Şifreler Uyuşmuyor")
});
const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'En az 8 karakter olarak giriniz!')
        .max(50, 'En fazla 50 karakter olarak giriniz!')
        .required('Zorunlu Alan'),
    email: Yup.string()
        .email('Geçersi e-posta adresi')
        .required('Zorunlu Alan'),

});
export { RegisterSchema,LoginSchema }