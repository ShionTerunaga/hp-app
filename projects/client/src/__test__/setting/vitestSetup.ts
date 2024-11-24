import { afterEach } from "node:test"
import "@testing-library/jest-dom"
import { vi } from "vitest"

const notFoundMock = vi.hoisted(() => vi.fn())
const mockRouter = vi.fn()

vi.mock("next/navigation", () => ({
    notFound: notFoundMock,
    userRouter: mockRouter
}))

afterEach(() => {
    vi.restoreAllMocks()
})
