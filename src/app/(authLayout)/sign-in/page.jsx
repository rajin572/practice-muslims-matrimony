"use client";

import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";
import signInImage from "@/assest/images/signInImage.png";
import logo from "@/assest/logo/logo.png";
import { Button, Form, Input, Typography } from "antd";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center min-h-screen">
            <Image
              src={signInImage}
              alt="love_image"
              width={0}
              height={0}
              sizes="100vw"
              className="max-h-[570px] max-w-[450px] mx-auto"
            />
          </div>
          <div>
            <Image
              src={logo}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-20 h-10 md:w-40 md:h-20 "
            />
            <h2 className="text-3xl font-semibold text-center text-[#090B0E]">
              Great to have you back !
            </h2>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              //   onFinish={onFinish}
              //   onFinishFailed={onFinishFailed}
              autoComplete="off"
            ></Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
