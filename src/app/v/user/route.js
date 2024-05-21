import { NextResponse } from "next/server";

const { default: dbConnect } = require("@/config/dbConnect");

dbConnect();


export const GET = () => {
    try {
        return NextResponse.json({ message: "god" });
    } catch (error) {
        return NextResponse.json({
            message: "error"
        }).body(error);
    }
}