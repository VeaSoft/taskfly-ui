import React from "react"

interface AuthHocProps {
  component: React.ComponentType<any>
}

const AuthHoc = ({ component: Component, ...rest }: AuthHocProps) => (
  <Component {...rest} />
)

export default AuthHoc
