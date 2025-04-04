import { ChevronRight, X } from "lucide-react"
import React from "react"

const Alert = ({ setOpen }) => {
  return (
    <div className="font-inter h-[4.375rem] w-screen border-b border-gray-200 bg-[#F7F7FA] py-[0.46875rem] fixed top-0 left-0 right-0 z-[1000]">
      <div className="mx-auto flex h-[3.375rem] w-[71.25rem] items-center justify-between">
        <div className="flex w-full justify-center">
          <div className="flex h-full w-[28.875rem] cursor-pointer items-center justify-between rounded-lg border border-gray-300 bg-[#fff] px-3 py-[0.625rem]">
            <div className="flex items-center gap-2">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMyAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4LjAwNTYgNS44MzE5QzI3Ljg1NDcgNS42NTE2MSAyNy42NDM1IDUuNTYxNDYgMjcuMzcyIDUuNTYxNDZDMjYuOTE5NCA1LjU2MTQ2IDI2LjUyNzEgNS45MjIwNSAyNi41MjcxIDYuNDAyODJDMjYuNTI3MSA2LjYxMzE2IDI2LjYxNzcgNi44MjM1MSAyNi43MzgzIDYuOTQzN0MyOS4wMDEzIDkuNDM3NzQgMzAuMjM4NCAxMi42NTI5IDMwLjIzODQgMTYuMDE4NEMzMC4yMzg0IDIzLjUzMDUgMjQuMTEzMyAyOS42MzA0IDE2LjU3MDEgMjkuNjMwNEM5LjAyNjgyIDI5LjYzMDQgMi45MDE3IDIzLjUzMDUgMi45MDE3IDE2LjAxODRDMi45MDE3IDguNTA2MjMgOS4wMjY4MiAyLjQwNjM2IDE2LjU3MDEgMi40MDYzNkMxNy43NzcgMi40MDYzNiAxOC45NTM3IDIuNTU2NiAyMC4xMDAzIDIuODU3MDlDMjAuMTYwNiAyLjg4NzEzIDIwLjI1MTIgMi44ODcxMyAyMC4zMTE1IDIuODg3MTNDMjAuNzY0MSAyLjg4NzEzIDIxLjE1NjQgMi41MjY1NSAyMS4xNTY0IDIuMDQ1NzdDMjEuMTU2NCAxLjY1NTE0IDIwLjg4NDggMS4zNTQ2NSAyMC41NTI5IDEuMjM0NDZDMTkuMjU1NSAwLjkwMzkyNSAxNy45Mjc4IDAuNzIzNjMzIDE2LjU3MDEgMC43MjM2MzNDOC4xMjE2MyAwLjcyMzYzMyAxLjI0MjE5IDcuNTc0NzIgMS4yNDIxOSAxNS45ODgzQzEuMjQyMTkgMjQuNDAyIDguMTIxNjMgMzEuMjUzIDE2LjU3MDEgMzEuMjUzQzI1LjAxODUgMzEuMjUzIDMxLjg5NzkgMjQuNDAyIDMxLjg5NzkgMTUuOTg4M0MzMS45MjgxIDEyLjI2MjMgMzAuNTQwMSA4LjYyNjQyIDI4LjAwNTYgNS44MzE5WiIgZmlsbD0iIzY1NTJEOCIvPgo8cGF0aCBkPSJNMjIuMDkxNCA1LjA4MDYzSDIzLjA4NzFWNi4wNzIyNEMyMy4wODcxIDYuNTIyOTYgMjMuNDQ5MiA2LjkxMzYgMjMuOTMyIDYuOTEzNkMyNC4zODQ2IDYuOTEzNiAyNC43NzY4IDYuNTUzMDEgMjQuNzc2OCA2LjA3MjI0VjUuMDgwNjNIMjUuNzcyNUMyNi4yMjUxIDUuMDgwNjMgMjYuNjE3NCA0LjcyMDA1IDI2LjYxNzQgNC4yMzkyN0MyNi42MTc0IDMuNzg4NTQgMjYuMjU1MyAzLjM5NzkxIDI1Ljc3MjUgMy4zOTc5MUgyNC43NzY4VjIuNDA2M0MyNC43NzY4IDEuOTU1NTcgMjQuNDE0NyAxLjU2NDk0IDIzLjkzMiAxLjU2NDk0QzIzLjQ3OTQgMS41NjQ5NCAyMy4wODcxIDEuOTI1NTIgMjMuMDg3MSAyLjQwNjNWMy4zOTc5MUgyMi4wOTE0QzIxLjYzODggMy4zOTc5MSAyMS4yNDY2IDMuNzU4NDkgMjEuMjQ2NiA0LjIzOTI3QzIxLjI3NjggNC42OSAyMS42Mzg4IDUuMDgwNjMgMjIuMDkxNCA1LjA4MDYzWiIgZmlsbD0iIzY1NTJEOCIvPgo8cGF0aCBkPSJNNy4xNDggMTlWMTIuNjczSDguMzcyVjE5SDcuMTQ4Wk04LjA0OCAxOVYxNy45MTFIMTEuMjdWMTlIOC4wNDhaTTEzLjk1MTcgMTkuMDlDMTMuNTEzNyAxOS4wOSAxMy4xMTc3IDE4Ljk5MSAxMi43NjM3IDE4Ljc5M0MxMi40MTU3IDE4LjU4OSAxMi4xMzY3IDE4LjMxNiAxMS45MjY3IDE3Ljk3NEMxMS43MjI3IDE3LjYyNiAxMS42MjA3IDE3LjIzOSAxMS42MjA3IDE2LjgxM0MxMS42MjA3IDE2LjM4NyAxMS43MjI3IDE2LjAwNiAxMS45MjY3IDE1LjY3QzEyLjEzMDcgMTUuMzI4IDEyLjQwOTcgMTUuMDU4IDEyLjc2MzcgMTQuODZDMTMuMTE3NyAxNC42NTYgMTMuNTEwNyAxNC41NTQgMTMuOTQyNyAxNC41NTRDMTQuMzg2NyAxNC41NTQgMTQuNzgyNyAxNC42NTYgMTUuMTMwNyAxNC44NkMxNS40ODQ3IDE1LjA1OCAxNS43NjM3IDE1LjMyOCAxNS45Njc3IDE1LjY3QzE2LjE3MTcgMTYuMDA2IDE2LjI3MzcgMTYuMzg3IDE2LjI3MzcgMTYuODEzQzE2LjI3MzcgMTcuMjM5IDE2LjE3MTcgMTcuNjI2IDE1Ljk2NzcgMTcuOTc0QzE1Ljc2MzcgMTguMzE2IDE1LjQ4NDcgMTguNTg5IDE1LjEzMDcgMTguNzkzQzE0Ljc4MjcgMTguOTkxIDE0LjM4OTcgMTkuMDkgMTMuOTUxNyAxOS4wOVpNMTMuOTQyNyAxNy45OTJDMTQuMTY0NyAxNy45OTIgMTQuMzU5NyAxNy45NDQgMTQuNTI3NyAxNy44NDhDMTQuNzAxNyAxNy43NDYgMTQuODMzNyAxNy42MDggMTQuOTIzNyAxNy40MzRDMTUuMDE5NyAxNy4yNTQgMTUuMDY3NyAxNy4wNSAxNS4wNjc3IDE2LjgyMkMxNS4wNjc3IDE2LjU5NCAxNS4wMTk3IDE2LjM5MyAxNC45MjM3IDE2LjIxOUMxNC44Mjc3IDE2LjA0NSAxNC42OTU3IDE1LjkxIDE0LjUyNzcgMTUuODE0QzE0LjM1OTcgMTUuNzEyIDE0LjE2NDcgMTUuNjYxIDEzLjk0MjcgMTUuNjYxQzEzLjcyNjcgMTUuNjYxIDEzLjUzNDcgMTUuNzEyIDEzLjM2NjcgMTUuODE0QzEzLjE5ODcgMTUuOTEgMTMuMDY2NyAxNi4wNDUgMTIuOTcwNyAxNi4yMTlDMTIuODc0NyAxNi4zOTMgMTIuODI2NyAxNi41OTQgMTIuODI2NyAxNi44MjJDMTIuODI2NyAxNy4wNSAxMi44NzQ3IDE3LjI1NCAxMi45NzA3IDE3LjQzNEMxMy4wNjY3IDE3LjYwOCAxMy4xOTg3IDE3Ljc0NiAxMy4zNjY3IDE3Ljg0OEMxMy41MzQ3IDE3Ljk0NCAxMy43MjY3IDE3Ljk5MiAxMy45NDI3IDE3Ljk5MlpNMTguODUwNyAxOS4wOUMxOC40NTQ3IDE5LjA5IDE4LjA5NzcgMTguOTkxIDE3Ljc3OTcgMTguNzkzQzE3LjQ2MTcgMTguNTk1IDE3LjIxMjcgMTguMzI1IDE3LjAzMjcgMTcuOTgzQzE2Ljg1MjcgMTcuNjQxIDE2Ljc2MjcgMTcuMjU3IDE2Ljc2MjcgMTYuODMxQzE2Ljc2MjcgMTYuMzk5IDE2Ljg1MjcgMTYuMDEyIDE3LjAzMjcgMTUuNjdDMTcuMjEyNyAxNS4zMjggMTcuNDYxNyAxNS4wNTggMTcuNzc5NyAxNC44NkMxOC4wOTc3IDE0LjY2MiAxOC40NTQ3IDE0LjU2MyAxOC44NTA3IDE0LjU2M0MxOS4xNjI3IDE0LjU2MyAxOS40NDE3IDE0LjYyNiAxOS42ODc3IDE0Ljc1MkMxOS45MzM3IDE0Ljg3OCAyMC4xMjg3IDE1LjA1NSAyMC4yNzI3IDE1LjI4M0MyMC40MjI3IDE1LjUwNSAyMC41MDM3IDE1Ljc1NyAyMC41MTU3IDE2LjAzOVYxNy42MDVDMjAuNTAzNyAxNy44OTMgMjAuNDIyNyAxOC4xNDggMjAuMjcyNyAxOC4zN0MyMC4xMjg3IDE4LjU5MiAxOS45MzM3IDE4Ljc2OSAxOS42ODc3IDE4LjkwMUMxOS40NDE3IDE5LjAyNyAxOS4xNjI3IDE5LjA5IDE4Ljg1MDcgMTkuMDlaTTE5LjA2NjcgMTguMDAxQzE5LjM5NjcgMTguMDAxIDE5LjY2MzcgMTcuODkzIDE5Ljg2NzcgMTcuNjc3QzIwLjA3MTcgMTcuNDU1IDIwLjE3MzcgMTcuMTcgMjAuMTczNyAxNi44MjJDMjAuMTczNyAxNi41OTQgMjAuMTI1NyAxNi4zOTMgMjAuMDI5NyAxNi4yMTlDMTkuOTM5NyAxNi4wMzkgMTkuODEwNyAxNS45MDEgMTkuNjQyNyAxNS44MDVDMTkuNDgwNyAxNS43MDMgMTkuMjg4NyAxNS42NTIgMTkuMDY2NyAxNS42NTJDMTguODUwNyAxNS42NTIgMTguNjU4NyAxNS43MDMgMTguNDkwNyAxNS44MDVDMTguMzI4NyAxNS45MDEgMTguMTk5NyAxNi4wMzkgMTguMTAzNyAxNi4yMTlDMTguMDEzNyAxNi4zOTMgMTcuOTY4NyAxNi41OTQgMTcuOTY4NyAxNi44MjJDMTcuOTY4NyAxNy4wNTYgMTguMDEzNyAxNy4yNjMgMTguMTAzNyAxNy40NDNDMTguMTk5NyAxNy42MTcgMTguMzI4NyAxNy43NTUgMTguNDkwNyAxNy44NTdDMTguNjU4NyAxNy45NTMgMTguODUwNyAxOC4wMDEgMTkuMDY2NyAxOC4wMDFaTTIwLjExMDcgMTlWMTcuODNMMjAuMjk5NyAxNi43NjhMMjAuMTEwNyAxNS43MjRWMTQuNjUzSDIxLjI4MDdWMTlIMjAuMTEwN1pNMjUuMjQ4OCAxOVYxNi41MDdDMjUuMjQ4OCAxNi4yNDkgMjUuMTY3OCAxNi4wMzkgMjUuMDA1OCAxNS44NzdDMjQuODQzOCAxNS43MTUgMjQuNjMzOCAxNS42MzQgMjQuMzc1OCAxNS42MzRDMjQuMjA3OCAxNS42MzQgMjQuMDU3OCAxNS42NyAyMy45MjU4IDE1Ljc0MkMyMy43OTM4IDE1LjgxNCAyMy42ODg4IDE1LjkxNiAyMy42MTA4IDE2LjA0OEMyMy41Mzg4IDE2LjE4IDIzLjUwMjggMTYuMzMzIDIzLjUwMjggMTYuNTA3TDIzLjA0MzggMTYuMjczQzIzLjA0MzggMTUuOTMxIDIzLjExNTggMTUuNjM0IDIzLjI1OTggMTUuMzgyQzIzLjQwOTggMTUuMTI0IDIzLjYxMzggMTQuOTIzIDIzLjg3MTggMTQuNzc5QzI0LjEzNTggMTQuNjM1IDI0LjQzMjggMTQuNTYzIDI0Ljc2MjggMTQuNTYzQzI1LjA4MDggMTQuNTYzIDI1LjM2NTggMTQuNjQ0IDI1LjYxNzggMTQuODA2QzI1Ljg2OTggMTQuOTYyIDI2LjA2NzggMTUuMTY5IDI2LjIxMTggMTUuNDI3QzI2LjM1NTggMTUuNjc5IDI2LjQyNzggMTUuOTUyIDI2LjQyNzggMTYuMjQ2VjE5SDI1LjI0ODhaTTIyLjMyMzggMTlWMTQuNjUzSDIzLjUwMjhWMTlIMjIuMzIzOFoiIGZpbGw9IiMwQzEyMkEiLz4KPC9zdmc+Cg=="
                alt=""
                className="object-cover h-8 w-8"
              />
              <span>Add the LoanTube site shortcut to your desktop</span>
            </div>
            <ChevronRight size={20} className="text-[#EE5A30]" />
          </div>
        </div>
        <div
          className="ml-[0.9375rem] cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <X className="text-gray-400" size={18} />
        </div>
      </div>
    </div>
  )
}

export default Alert
