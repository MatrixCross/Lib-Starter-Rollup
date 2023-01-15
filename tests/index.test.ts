import { describe, it, expect } from 'vitest'
import { Hello, sum } from '@/index'

describe('简单测试', () => {
  it('测试sum', () => {
    expect(sum(1,2)).toBe(3)
  })
  it('看看helloworld', ()=>{
    expect(Hello).toBe('Hello World!')
  })
})
