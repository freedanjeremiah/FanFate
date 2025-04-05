import * as React from "react"

const Card = ({ className, ...props }) => (
    <div className={`border shadow-sm ${className}`} {...props} />
)

const CardHeader = ({ className, ...props }) => (
    <div className={`flex flex-col space-y-1 p-4 ${className}`} {...props} />
)

const CardTitle = ({ className, ...props }) => (
    <h3 className={`text-xl font-semibold leading-none tracking-tight ${className}`} {...props} />
)

const CardDescription = ({ className, ...props }) => (
    <p className={`text-sm text-muted-foreground ${className}`} {...props} />
)

const CardContent = ({ className, ...props }) => (
    <div className={`p-4 pt-0 ${className}`} {...props} />
)

const CardFooter = ({ className, ...props }) => (
    <div className={`flex items-center p-4 pt-0 ${className}`} {...props} />
)

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
