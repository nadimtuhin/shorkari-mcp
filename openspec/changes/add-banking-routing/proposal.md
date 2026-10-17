# Change Proposal: add-banking-routing

## Why
Every Bangladeshi fintech, payroll system, and cross-border remittance service needs verified BEFTN routing numbers across the country's 63 banks and 11,426 branches. Unvetted public datasets contain routing defects, including routing customer salaries to non-payable settlement endpoints.

## What Changes
- Ingest the verified CC0 dataset from `MdHRShohel/bd-bank-routing` into Cloudflare D1.
- Index 63 banks, 11,426 branches, routing numbers, and payable settlement status flags.
- Implement MCP tool `lookup_bank_routing` supporting fuzzy branch/bank search and district filtering.

## Capabilities

### New Capabilities
- `bank-routing-lookup`: Search and validation tool for Bangladesh Electronic Funds Transfer Network (BEFTN) bank routing numbers and branch metadata.

### Modified Capabilities
None.

## Impact
AI agents can immediately validate bank routing numbers, look up branch addresses, and prevent misdirected domestic payments.
