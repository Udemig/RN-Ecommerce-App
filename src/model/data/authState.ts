interface AuthState{
    error:null|string|unknown|undefined,
    pendingRegister:boolean,
    logOutModalVisible:boolean,
    visible:boolean,
    isLogin:boolean,
    registerModalVisible:boolean,
    registerStatus:boolean | null
}

export type {AuthState}