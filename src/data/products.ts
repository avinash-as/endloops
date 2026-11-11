import {
  FileSearch,
  ShieldCheck,
  ClipboardCheck,
  Calculator,
  Building2,
  Receipt,
  GitCompare,
  FileText,
  Scale,
  SearchCheck,
  RefreshCw,
  PackageCheck,
} from 'lucide-react'

export type Product = {
  name: string
  description: string
  outcome: string
  icon: typeof FileSearch
  status?: 'Live' | 'In development'
}

export const solutions: Product[] = [
  {
    name: 'Budget review',
    description:
      'Review an entire budget pack against policy, prior periods and supporting documents, with every variance explained.',
    outcome: 'A reviewed budget pack with flagged variances and a clear audit trail.',
    icon: Calculator,
    status: 'Live',
  },
  {
    name: 'Escrow audit',
    description:
      'Run the full escrow lifecycle — contributions, releases, reconciliations and reporting — from one workspace.',
    outcome: 'Complete escrow audit files ready for sign-off.',
    icon: ShieldCheck,
    status: 'Live',
  },
  {
    name: 'Financial audit',
    description:
      'Prepare audit working papers across the whole engagement, from planning and risk to final reporting.',
    outcome: 'A structured audit file with evidence linked to every conclusion.',
    icon: ClipboardCheck,
    status: 'In development',
  },
  {
    name: 'Interim audit',
    description:
      'Perform interim procedures early, surface issues sooner and reduce year-end pressure.',
    outcome: 'Interim findings and updated risk assessments before year end.',
    icon: FileSearch,
    status: 'In development',
  },
  {
    name: 'Budget preparation for property management companies',
    description:
      'Build property-level and portfolio budgets from leases, service charges and maintenance plans.',
    outcome: 'Approved-ready budgets for every property and the portfolio.',
    icon: Building2,
    status: 'In development',
  },
]

export const tools: Product[] = [
  {
    name: 'Purchase-order extraction',
    description:
      'Extract line items, quantities, prices and terms from purchase orders and invoices in seconds.',
    outcome: 'Structured data ready for matching and review.',
    icon: Receipt,
    status: 'Live',
  },
  {
    name: 'Vouching automation',
    description:
      'Match transactions to supporting documents and highlight anything that cannot be vouched.',
    outcome: 'A vouching schedule with exceptions clearly marked.',
    icon: SearchCheck,
    status: 'Live',
  },
  {
    name: 'Expense working automation',
    description:
      'Prepare expense workings from statements and invoices, grouped and totalled for review.',
    outcome: 'Expense schedules ready to drop into the working paper.',
    icon: FileText,
    status: 'Live',
  },
  {
    name: 'Financial report review',
    description:
      'Check a financial report for consistency, completeness and agreed limits before release.',
    outcome: 'A review memo with findings and suggested corrections.',
    icon: Scale,
    status: 'In development',
  },
  {
    name: 'Tender verification',
    description:
      'Compare quotes, check compliance with tender terms and flag deviations.',
    outcome: 'A tender comparison with exceptions and recommendations.',
    icon: GitCompare,
    status: 'Live',
  },
  {
    name: 'Reconciliation',
    description:
      'Reconcile accounts, statements and sub-ledgers, and explain every unmatched item.',
    outcome: 'Completed reconciliations with unmatched items explained.',
    icon: RefreshCw,
    status: 'Live',
  },
]

export const capabilities = [
  {
    title: 'Read documents',
    description: 'Extract figures and details from invoices, purchase orders, contracts and statements.',
    icon: FileSearch,
  },
  {
    title: 'Compare and match',
    description: 'Check documents against ledgers, or quotes against each other.',
    icon: GitCompare,
  },
  {
    title: 'Check against rules',
    description: 'Flag missing items, mismatched totals, duplicates and anything outside agreed limits.',
    icon: ShieldCheck,
  },
  {
    title: 'Prepare drafts',
    description: 'Produce schedules, working papers and reports ready for review.',
    icon: FileText,
  },
  {
    title: 'Handle bulk work',
    description: 'Process hundreds of documents at once, without losing traceability.',
    icon: PackageCheck,
  },
]
