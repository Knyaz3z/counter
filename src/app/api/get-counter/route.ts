import {kv} from '@/lib/kv';
import {NextResponse} from 'next/server';

export async function GET() {
    let counter = await kv.get<number>('counter');

    if (counter === null) {
        counter = 100;
        await kv.set('counter', counter);
    }

    return NextResponse.json({ counter });
}
