"use client";

/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import { Button, Form, Select } from "antd";
import React from "react";
import backgroundImage from "@/assest/images/banner-bg.png";
import { IoSearch } from "react-icons/io5";
import AvatarRatting from "./AvatarRatting";

const Banner = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div
      className=" bg-center bg-no-repeat bg-cover min-h-screen flex justify-center items-center text-center py-28 lg:py-10"
      style={{
        backgroundImage: `linear-gradient(rgba(71, 88, 110, 0.65), rgba(71, 88, 110, 0.65)),url(${backgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
      }}
    >
      <Container>
        <div className="flex justify-center items-center text-center flex-col">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#FDFDFD] font-bold">
            Trusted Matrimony &
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#E33183] font-bold mb-10">
            Matchmaking Service
          </h2>
          <p className="text-[#DCBF80] mb-10 text-xs md:text-sm w-full md:w-[60%]">
            Marriage completes half of a person's deen. Let them, thereafter,
            embrace piety and God-consciousness in fulfilling the remaining
            half. Through devotion and reverence towards Allah, may they
            navigate the journey of life with integrity, kindness, and
            righteousness, thus attaining completeness in both faith and
            practice
          </p>
          <div className="bg-[#909DAD] py-4 px-7 mb-14">
            <Form
              name="basic"
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
              className=" lg:flex justify-between items-center gap-4 text-start "
            >
              <Form.Item
                label="I’m Looking for a"
                name="interest"
                style={{ color: "white" }}
              >
                <Select
                  defaultValue="Woman"
                  className="max-w-[200px]"
                  options={[
                    {
                      value: "woman",
                      label: "Woman",
                    },
                    {
                      value: "man",
                      label: "Man",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Age" name="age">
                <div className="flex items-center gap-2">
                  <Select
                    defaultValue="30"
                    className="max-w-[90px]"
                    options={[
                      {
                        value: "18",
                        label: "18",
                      },
                      {
                        value: "25",
                        label: "25",
                      },
                      {
                        value: "30",
                        label: "30",
                      },
                    ]}
                  />
                  <p className="text-[#FDFDFD]">To </p>
                  <Select
                    defaultValue="30"
                    className="max-w-[90px]"
                    options={[
                      {
                        value: "18",
                        label: "18",
                      },
                      {
                        value: "25",
                        label: "25",
                      },
                      {
                        value: "30",
                        label: "30",
                      },
                    ]}
                  />
                </div>
              </Form.Item>
              <Form.Item label="Mother Tongue" name="motherTongue">
                <Select
                  defaultValue="urdu"
                  className="max-w-[200px]"
                  options={[
                    {
                      value: "urdu",
                      label: "Urdu",
                    },
                    {
                      value: "bangla",
                      label: "Bangla",
                    },
                    {
                      value: "arabic",
                      label: "Arabic",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Country" name="country">
                <Select
                  defaultValue="pakistan"
                  className="max-w-[200px]"
                  options={[
                    {
                      value: "bangladesh",
                      label: "Bangladesh",
                    },
                    {
                      value: "india",
                      label: "India",
                    },
                    {
                      value: "pakistan",
                      label: "pakistan",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Religion" name="religion">
                <Select
                  defaultValue="islam"
                  className="max-w-[200px]"
                  options={[
                    {
                      value: "islam",
                      label: "Islam",
                    },
                    {
                      value: "hindu",
                      label: "Hindu",
                    },
                    {
                      value: "christian",
                      label: "Christian",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    marginTop: "25px",
                    backgroundColor: "#E33183",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>Submit</span>
                  <span>
                    <IoSearch />
                  </span>
                </Button>
              </Form.Item>
            </Form>
            {/* <div>
              <p className="text-[#FDFDFD] ">I’m Looking for a</p>

            </div> */}
            {/* <div>
              <p className="text-[#FDFDFD] ">Age</p>
            </div>
            <div>
              <p className="text-[#FDFDFD] ">Mother Tongue</p>
            </div>
            <div>
              <p className="text-[#FDFDFD] ">Country</p>
            </div>
            <div>
              <p className="text-[#FDFDFD] ">Religion</p>
            </div> */}
          </div>
          <AvatarRatting />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
