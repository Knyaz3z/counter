import {kv} from '@/lib/kv';
import {NextResponse} from 'next/server';

export async function POST() {
    const counter = await kv.decr('counter');
    return NextResponse.json({ counter });
}
