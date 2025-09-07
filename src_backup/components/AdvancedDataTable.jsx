import { useState, useMemo, useCallback } from 'react';\"\";
import { motion, AnimatePresence } from 'framer-motion';\"\";
import { ChevronUp, ChevronDown, Search, Filter, Download, Eye, Edit, Trash2, ArrowUpDown } from 'lucide-react';\"\";
import { useVirtualScroll  } from '../hooks/useVirtualScroll.jsx';
<<<<<<< HEAD:src_backup/components/AdvancedDataTable.jsx
export const AdvancedDataTable = ({ data, columns, height = 500, enableSearch = true, enableSorting = true, enablePagination = true, enableSelection = false, enableActions = false, enableExport = false, pageSize = 20, className = '', onRowClick, onSelectionChange, onExport }) => {const { trackEvent } = useAnalytics({        enableTracking: true, enableUserBehaviorTracking: true})';';
=======

export const AdvancedDataTable = ({ data, columns, height = 500, enableSearch = true, enableSorting = true, enablePagination = true, enableSelection = false, enableActions = false, enableExport = false, pageSize = 20, className = '', onRowClick, onSelectionChange, onExport }) => ;
  const { trackEvent } = useAnalytics({        enableTracking: true, enableUserBehaviorTracking: tru,}
})';';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/components/AdvancedDataTable.jsx
