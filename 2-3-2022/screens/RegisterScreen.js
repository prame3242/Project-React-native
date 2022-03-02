import { StyleSheet, View, Text } from "react-native";
import React from "react";
import {
  Container,
  Header,
  Content,
  Item,
  Form,
  Input,
  Label,
  Button,
  Icon,
} from "native-base";
import axios from "axios";
import { Formik, Field } from "formik";
import * as Yup from "yup";
const ValidateSchema = Yup.object().shape({
  name: Yup.string().required("กรุณาป้อนชื่อสกุล"),
  email: Yup.string()
    .email("รูปแบบอีเมลไม่ถูกต้อง")
    .required("กรุณากรอกอีเมลใหม่อีกครั้ง"),
  password: Yup.string()
    .min(4, "รหัสผ่านสั้นเกินไป")
    .required("กรุณาป้อนรหัสผ่าน"),
});
const RegisterScreen = ({ navigation }) => {
  return (
    <Container>
      <Content padder>
        <Formik
          //set Default value == in backend
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={ValidateSchema}
          //when register button is onClick it will be use onSubmit
          onSubmit={async (values,{setSubmitting}) => {
            // same shape as initial values
            try{
              const url = 'https://api.codingthailand.com/api/register';
              const res = await axios.post(url,{
                name : values.name,
                email : values.email,
                password : values.password
              });
              alert(res.data.message);
              navigation.navigate('Home');
            }catch(error){
              alert(error.response.data.erroes.email[0]);
            }finally{
              setSubmitting(false); //ให้ปุ่มกลับมาคลิกได้อีก
            }
          }}
        >
          {({ errors, touched, values, handleBlur, handleSubmit, handleChange, isSubmitting }) => (
            <Form>
              <Item
                fixedLabel
                error={errors.name && touched.name ? true : false}
              >
                <Label>Name</Label>
                <Input
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />
                {errors.name && touched.name && <Icon name="close-circle" />}
                
              </Item>
              {errors.name && touched.name && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.name}</Label>
                </Item>
              )}
              <Item
                fixedLabel
                last
                error={errors.email && touched.email ? true : false}
              >
                <Label>Email</Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  keyboardType="email-address"
                />
                {errors.email && touched.email && <Icon name="close-circle" />}
              </Item>
              {errors.email && touched.email && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.email}</Label>
                </Item>
              )}
              <Item
                fixedLabel              
                error={errors.password && touched.password ? true : false}
              >
                <Label>Password</Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  keyboardType='number-pad'
                  secureTextEntry={true}
                />
                {errors.password && touched.password && <Icon name="close-circle" />}
              </Item>
              {errors.password && touched.password && (
                <Item>
                  <Label style={{ color: "red" }}>{errors.password}</Label>
                </Item>
              )}
              <Button full style={{ marginTop: 30, backgroundColor: "#00AAFF" }} onPress={handleSubmit} disabled={isSubmitting}>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
                >
                  Register
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default RegisterScreen;
