import {redis} from '@/lib/redis';
import {NextResponse} from 'next/server';

export async function GET() {
    let counter = await redis.get<number>('counter');

    if (counter === null) {
        counter = 100;
        await redis.set('counter', counter);
    }

    return NextResponse.json({ counter });
}
