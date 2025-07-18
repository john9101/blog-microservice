import React, { useState } from 'react';
import {Button, Form, Input, Typography} from 'antd';

const { Title } = Typography;

type LayoutType = Parameters<typeof Form>[0]['layout'];

const App: React.FC = () => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>('vertical');

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    return (
        <>
            <Typography>
                <Title>Create Post</Title>
            </Typography>
            <Form
                layout={formLayout}
                form={form}
                initialValues={{ layout: formLayout }}
                onValuesChange={onFormLayoutChange}
                style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
            >
                <Form.Item label="Title">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default App;