import React from 'react'
import { Form, Input, Button } from 'antd'

import {
    RocketOutlined
} from '@ant-design/icons'

const FormApp = () => {

    const onsubmit = (values: any) => {
        console.log(values);
    }

    return (
        <Form
            onFinish={onsubmit}
        >
            <Form.Item 
                label="username" 
                name="username"
                rules={[{required: true, message: 'El campo es requerido'}]}>
                <Input />
            </Form.Item>
            <Form.Item 
                label="password" 
                name="password"
                rules={[{required: true, message: 'El campo es requerido'}]}>
                <Input.Password />
            </Form.Item>
            <Button 
                htmlType="submit"
                type="primary" 
                icon={<RocketOutlined />}>
                Aceptar
            </Button>
        </Form>
    )
}

export default FormApp
