interface registerParams{
name:string,
password:string,
email:string,
avatar?:string
}
interface loginParams{
    email:string,
    password:string
}
export type {registerParams,loginParams}