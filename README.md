# Thamar Investment App

## State Management Across Screens

The app uses a **global state** managed via **React Context** and `useReducer` (`WalletContext`).

- `WalletProvider` wraps the entire app, providing access to the state and a `dispatch` function.
- Screens consume the state using the `useWallet` hook.
- Actions like `"INIT_DATA"`, `"INVEST"`, and `"DEPOSIT"` update balances and transactions globally.

**Screens & Usage:**

1. **HomeDashboardScreen**
   - Displays `availableBalance`, `investedBalance`, and `opportunities`.
   - Navigating to an opportunity passes the selected item as a param.

2. **OpportunityViewScreen**
   - Uses `dispatch({ type: "INVEST", payload })` to perform investment.
   - Updates `availableBalance`, `investedBalance`, and prepends a new transaction.

3. **WalletScreen**
   - Shows current balances and a list of transactions from the global state.
   - Automatically reflects any changes made by other screens.

## Handling Money Values

- All monetary values are stored as **numbers** in the global state.
- Formatting for display is done via the `formatCurrency` utility, ensuring:
  - Comma separators for thousands
  - Two decimal places
  - Consistent currency display (SAR) across screens

- Calculations like `totalBalance = availableBalance + investedBalance` are computed dynamically on render, ensuring always up-to-date values.

## Improvements with More Time

- Persist wallet state to **AsyncStorage** to retain data across app restarts.
- Implement proper **error handling** and user feedback for failed investments.
- Introduce **unit and integration tests** for reducer logic and screen components.
- Optimize performance for large transaction lists using `VirtualizedList` enhancements.
