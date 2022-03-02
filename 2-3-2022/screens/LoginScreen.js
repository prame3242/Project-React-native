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
  email: Yup.string()
    .email("รูปแบบอีเมลไม่ถูกต้อง")
    .required("กรุณากรอกอีเมลใหม่อีกครั้ง"),
  password: Yup.string()
    .min(4, "รหัสผ่านสั้นเกินไป")
    .required("กรุณาป้อนรหัสผ่าน"),
});
const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <Content padder>
        <Formik
          //set Default value == in backend
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={ValidateSchema}
          //when Login button is onClick it will be use onSubmit
          onSubmit={async (values,{setSubmitting}) => {
            // same shape as initial values
            try{
              
            }catch(error){
              
            }finally{
              setSubmitting(false); //ให้ปุ่มกลับมาคลิกได้อีก
            }
          }}
        >
          {({ errors, touched, values, handleBlur, handleSubmit, handleChange, isSubmitting }) => (
            <Form>
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
                  Login
                </Text>
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default LoginScreen;