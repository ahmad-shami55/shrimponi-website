import { createContext, useContext, useState } from 'react'
import { branches } from '../data/branches'

const BranchContext = createContext(null)

export function BranchProvider({ children }) {
  const [branchId, setBranchId] = useState(branches[0].id)
  const branch = branches.find((b) => b.id === branchId) || branches[0]

  return (
    <BranchContext.Provider value={{ branch, branchId, setBranchId, branches }}>
      {children}
    </BranchContext.Provider>
  )
}

export function useBranch() {
  const ctx = useContext(BranchContext)
  if (!ctx) throw new Error('useBranch must be used within BranchProvider')
  return ctx
}
