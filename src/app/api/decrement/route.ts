import {redis} from '@/lib/redis';
import {NextResponse} from 'next/server';

export async function POST() {
    const counter = await redis.decr('counter');
    return NextResponse.json({ counter });
}
