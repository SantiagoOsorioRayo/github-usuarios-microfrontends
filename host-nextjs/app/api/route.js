import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json(
    { status: 'ok' },
    {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Cache-Control': 'no-store',
      },
    }
  );
}

export function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Cache-Control': 'no-store',
      },
    }
  );
}
