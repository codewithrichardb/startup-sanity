import { NextResponse, NextApiRequest } from "next/server"
import clientPromise from "@/app/lib/mongodb"

export async function POST(req: NextApiRequest){
    const body = await req.json()
    const client = await clientPromise
    const db = client.db("startup-sanity")
    const collection = db.collection("logs")

    const log = {
        ...body,
        createdAt: new Date().toISOString()
    }

    const result = await collection.insertOne(log)
    return NextResponse.json({success: true, logId: result.insertedId})
    
}