"use client"

export function ScaleRight() {
  return (
    <div className="absolute top-0 -right-12 h-full w-3 border-x border-primary/5 bg-[repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] bg-size-[10px_10px] text-primary/5 lg:w-14"></div>
  )
}

export function ScaleLeft() {
  return (
    <div className="absolute top-0 -left-12 h-full w-4 border-x border-primary/5 bg-[repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] bg-size-[10px_10px] text-primary/5 lg:w-14"></div>
  )
}