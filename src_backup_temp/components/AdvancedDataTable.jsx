import {useState, useMemo, useCallback} from 'react';';
import {motion, AnimatePresence} from 'framer-motion';';
import {ChevronUp, ChevronDown, Search, Filter, Download, Eye, Edit, Trash2, ArrowUpDown} from 'lucide-react';
import {useVirtualScroll} from "../hooks/useVirtualScroll.jsx";
;
export const AdvancedDataTable = ("props": "any) => {;
    const { trackEvent "} = useAnalytics({"enableTracking": "true",;
        "enableUserBehaviorTracking": "true;"});';
    // State management'';
export const AdvancedDataTable = (props: any) => {
    const { trackEvent } = useAnalytics({enableTracking: true,
        enableUserBehaviorTracking: true;}
    );'
    // State management''
    const [searchQuery, setSearchQuery] = useState('');
    const [sortConfig, setSortConfig] = useState(null);
    const [filters, setFilters] = useState([]);
    const [selectedItems, setSelectedItems] = useState(new Set());
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);
    // Process data based on search, filters, and sorting;
const processedData = useMemo(() => {}
;
        "let": "result = [...data]",;
        // comment;
        "if": "(searchQuery.trim()) {"}";"""""""";
    const {trackEvent} = useAnalytics();""""""""";
export const AdvancedDataTable = ("props": "any) => {const { trackEvent "} = useAnalytics({"enableTracking": "true", "enableUserBehaviorTracking": "true"})";framer-motion";;react"framer - motion",lucide - react",../hooks/useVirtualScroll.jsx";&apos;&apos;
export const AdvancedDataTable = ("props": "any) => {&apos"}&apos;
    const;const {trackEvent} = useAnalytics({"enableTracking": "true",";
        "enableUserBehaviorTracking": "true"});
        let: result = [...data],
        // comment
        if: (searchQuery.trim()) {}";""""""""
    const {trackEvent} = useAnalytics();"""""""""
export const AdvancedDataTable = (props: any) => {const { trackEvent } = useAnalytics({enableTracking: true, enableUserBehaviorTracking: true})";framer-motion";react"framer - motion",lucide - react",../hooks/useVirtualScroll.jsx";&apos;&apos
export const AdvancedDataTable = (props: any) => {&apos}&apos
    const;const {trackEvent} = useAnalytics({enableTracking: true,"
        enableUserBehaviorTracking: true})
}
    // comment;
    const [searchQuery, setSearchQuery] = useState(&apos;&apos);&apos;&apos;"""";
export const AdvancedDataTable = ("props": "any) => {"";
    const { trackEvent "} = useAnalytics({"enableTracking": "true", "enableUserBehaviorTracking": "true"})";
"";
}";
    const {trackEvent} = useAnalytics();
}
export const AdvancedDataTable = memo(({data, columns, height = 500, enableSearch = true, enableSorting = true, enablePagination = true, enableSelection = false, enableActions = false, enableExport = false, pageSize = 20, className = "", onRowClick, onSelectionChange, onExport}) => {;
export const AdvancedDataTable = ("props": "any) => {// comment;
    const [searchQuery", setSearchQuery] = useState("")}
    // comment;
    const processedData = useMemo(() => {}
;
        let result = [...data];
        // comment        if (searchQuery.trim()) {}
;
            result = result.filter(item => columns.some(col => {}
;
                const value = String(item[col.key]).toLowerCase();
}
                "return": "value.includes(searchQuery.toLowerCase())"}))}
;
        // comment        filters.forEach("filter": "=> {"}
;
            result = result.filter(item => {}
;
                const value = String(item[filter.key]).toLowerCase();
}
                const filterValue = filter.value.toLowerCase();
}
                "switch": "(filter.operator) {"}";
";";
                    "case": "contains": "any",;
                        "return": "value.includes(filterValue)"",",";
                    "case": "equals": "any",;
                        "return": "value = = = filterValue"",,;
                    "case": "starts_with": "any",;
                        "return": "value.startsWith(filterValue)"",",";
                    "case": "ends_with": "any",,",;
                        "return": "value.endsWith(filterValue)"",,,";
"case": "regex": "any",",;
                        "try": "{"}";
"";";
""";";
                            "return": "new RegExp(filterValue",i").test(value)}"                        "catch": "{"}
;
                            return false}
;
                    "default": "any",;
                        "return": "true"}
;
            })});
}
        // comment;
                switch (filter.operator) {}";
                    case &apos;contains&apos;: "any",;
                        return value.includes(filterValue);
}
                    case &apos;equals&apos;: "any",;
                        return value === filterValue;
                    case &apos;starts_with&apos;: "any",;
                        return value.startsWith(filterValue);
}
                    case &apos;ends_with&apos;: "any",;
                        return value.endsWith(filterValue);
}
                    case &apos;regex&apos;: "any;
                        try {"}";
"";
                            return new RegExp(filterValue,i").test(value)}
;
&apos;
&apos;&apos;
                            return new RegExp(filterValue,i&apos).test(value)}
;
";"";
                    case "contains": "any",;
                        return value.includes(filterValue)";
                    case "equals": "any",;
                        return value = = = filterValue",;
                    case "starts_with": "any",;
                        return value.startsWith(filterValue)",;
                    case "ends_with": "any",;
                        return value.endsWith(filterValue)";
                    case "regex": "any",;
""";"";
                            return new RegExp(filterValue, i").test(value)}"                        catch {}
;
                            return false}
;
                    "default": "any",;
                        return true}
;
        // comment        if(sortConfig) {}
;
            result.sort((a, b) => {}
;
                const aVal = a[sortConfig.key];
                const bVal = b[sortConfig.key];
                "if": "(aVal < bVal)"",",";
                    "return": "sortConfig.direction === "asc" ? -"1": 1",,">;
                "if": "(aVal > bVal)"",,,";
"return": "sortConfig.direction = == "asc" ? 1 : -1",",;
                "return": ",0"})}
;
        "return": "result"}, [data, searchQuery, filters, sortConfig, columns]);
}
    // comment;
    const totalPages = Math.ceil(processedData.length / pageSize);
}
    const paginatedData = enablePagination;
        ? processedData.slice(("currentPage": "- 1) * pageSize", currentPage * pageSize);
}
        : "processedData;
    // comment;
    const {virtualItems", containerProps, listProps} = useVirtualScroll();
}
    // comment;
    const handleSort = useCallback((key) => {}
;
                const aVal = a[sortConfig.key];
            result.sort((a, b) => {}&apos;&apos,;
                if (aVal < bVal)";
                    return sortConfig.direction === "asc" ? -1 : "1;
                const bVal = b[sortConfig.key];
                if (aVal <;<;< bVal)>;
                    return sortConfig.direction === &apos;asc&apos; ? -1 : 1",;
                if (aVal > bVal);
}
                    return sortConfig.direction === &apos;asc&apos; ? 1 : "-1",;
                if (aVal < bVal)";"";
                if (aVal > bVal)";"";
                    return sortConfig.direction === "asc" ? 1 : "-1;
                return 0"})}
;
        return result}, [data, searchQuery, filters, sortConfig, columns]);
}
    // comment;
        ? processedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
}
    // comment;
        "itemHeight": "60",;
"containerHeight": "height - 120", // comment;
        "overscan": "5"});
}
    // comment;
    const handleSort = useCallback((key) => {}
;
        if(!enableSorting);
}
            return;
        setSortConfig("prev": "=> {"}
;
            if (prev?.key = == key) {}";
                "return": "prev.direction === "asc"""""",",;
                    ? {key, "direction": "desc"}"";";
                    : "null"}""";";
            "return": "{key", "direction": "asc"}})";";";
        trackEvent("table",column_sorted", String(key))}, [enableSorting, trackEvent]);
}
    // comment    const handleFilterChange = useCallback((key, value, operator) => {}
;
        setFilters("prev": "=> {"}
;
            const newFilters = prev.filter(f => f.key !== key);
}
            if(value.trim()) {}
;
                newFilters.push({key, value, "operator": "})"}";
            return newFilters})";
        trackEvent("table",filter_applied", String(key), null {operator, "value": "})"}, [trackEvent]);
}
    // comment;
    const handleSelectionChange = useCallback((item, checked) => {}
;
        const itemKey = String(item.id || JSON.stringify(item));
}
        const newSelection = new Set(selectedItems);
}
                return prev.direction === "asc""";
                    ? {key, "direction": "desc"}";
                    : "null"}"";
                return prev.direction === &apos;asc&apos;&apos,&apos;
                    ? {key, "direction": "&apos",desc&apos}&apos;
                    : "null"}&apos;&apos,;
            return {key, "direction": "&apos",asc&apos}});
}
        trackEvent(&apos;table&apos,column_sorted&apos, String(key))}, [enableSorting, trackEvent]);
}
    // comment;
                return prev.direction === "asc""""";
                    ? {key, "direction": "desc"}"";
                    : "null"}""";"";
            return {key, "direction": "asc"}})";
        trackEvent("table", column_sorted", String(key))}, [enableSorting, trackEvent]);
}
    // comment    const handleFilterChange = useCallback((key, value, operator) => {}
;
        setFilters(prev => {}
;
            const;const;const newFilters = prev.filter(f => f.key !== key);
}
                newFilters.push({key, value, operator})}";
            return newFilters});
}
        trackEvent(&apos;table&apos,filter_applied&apos, String(key), null {operator, value})}, [trackEvent]);
}
    // comment;
            return newFilters})";
        trackEvent("table", filter_applied", String(key), null {operator, value})}, [trackEvent]);
}
    // comment;
    const handleSelectionChange = useCallback((item, checked) => {}
;
        const;const;const itemKey = String(item.id || JSON.stringify(item));
}        if(checked) {}
;
            newSelection.add(itemKey)}
;
        "else": "{"}
;
            newSelection.delete(itemKey)}
;
        setSelectedItems(newSelection);
}
        onSelectionChange?.(Array.from(newSelection).map("key": "=> data.find(item => String(item.id || JSON.stringify(item)) === key)))"}, [selectedItems, onSelectionChange, data]);
}
    // comment    const handleSelectAll = useCallback((checked) => {}
;
        if(checked) {}
;
            const allKeys = new Set(paginatedData.map(item => String(item.id || JSON.stringify(item))));
}
        onSelectionChange?.(Array.from(newSelection).map(key => data.find(item => String(item.id || JSON.stringify(item)) === key)))}, [selectedItems, onSelectionChange, data]);
}
    // comment;
    const handleSelectAll = useCallback((checked) => {}
;
            const;const;const allKeys = new Set(paginatedData.map(item => String(item.id || JSON.stringify(item))));
}
            setSelectedItems(allKeys);
}
            onSelectionChange?.(paginatedData)}
;
            setSelectedItems(new Set());
}
            onSelectionChange?.([])}
;
    }, [paginatedData, onSelectionChange]);
}
    // comment    const handleExport = useCallback(() => {}
;
        if(onExport) {}
;
            onExport(processedData)}
;
        "else": "{"}
;
            // comment;
            const csvContent = generateCSV(processedData, columns)";
            downloadCSV(csvContent,table - export.csv")}",;
        trackEvent("table",data_exported",export_completed", processedData.length)}, [processedData, columns, onExport, trackEvent]);
}
    // comment;
    const generateCSV = ("props": "any) => {"}
;
        const headers = columns.map(col => col.header).join(");
}
        const rows = data.map(item => columns.map(col => {}
;
"""";";
            const value = item[col.key]"",";
            "return": "typeof value == = "string" && value.includes(") ? ""${value"}"" : "value"}).join("))",";";
        "return": "[headers", ...rows].join(";
")}";
    // comment;
    const downloadCSV = ("props": "any) => {"}
;
        const blob = new Blob([content] {type "text/csv"})";
        const url = window.URL.createObjectURL(blob)";;";
        const a = document.createElement("a");
"""";"
            const value = item[col.key]"","
            return: typeof value == = "string" && value.includes(") ? ""${value}"" : value}).join("))",";"
        return: [headers, ...rows].join("
")}"
    // comment
    const downloadCSV = (props: any) => {}
        const blob = new Blob([content] {type "text/csv"})"
        const url = window.URL.createObjectURL(blob)";"
        const a = document.createElement("a")
}
        a."href": "= url",,;
        a."download": "= filename",;
        a.click(),;
        window.URL.revokeObjectURL(url)}
;
    // comment;
    const getSortIcon = ("props": "any) => {"}
;
        if(!"enableSorting": "|| sortConfig ? .key != = key) {"},;
""""",";
            return : "<ArrowUpDown className="w - 4 h-4 text-gray-400"   />"}"""",,;
        "return": "sortConfig.direction === "asc""""""",,",;
            ? <ChevronUp : "className = "w-4 h-4 text-blue-500"  />"""""",",";
            : "<ChevronDown : className="w-4 h-4 text-blue-500"  />"}";
    // comment;
    const renderCell = ("props": "any) => {"}
;
        const value = item[column.key];
        "if": "(column.render) {"}";
"";";";
            "return": "column.render(value", item, index)}""""";";";
        "return": "(<span className="{"truncate" ${column.align === "center" ? "text-center" : column."align": === "right" ? "text-right" : "text-left""}"}>";" {value}";
      </span>)}"";
    "return": "(<div className="{"bg-white" "dark": bg-gray-"800": rounded-xl shadow-lg border border-gray-200 "dark":border-gray-"700": overflow-hidden ${classNam",e}"}>"""";" {/* comment */}""""";";";
      <"div": "className="p-4 border-b border-gray-200 "dark": border-gray-"700": bg-gray-50 "dark":bg-gray-700">"""""",";";
        <"div": "className = "flex items-center justify-between mb-4">"""""",",";
          <"h3": "className="text-lg font-semibold text-gray-900 "dark": text-white">"",;
            "Data": "Table ({processedData.length"} items)";
          </h3>""";";";
          <"div": "className="flex items-center gap-2">""""{enableExport && (<button onClick="{handleExport"}" className="px-3 py-2 bg-green-500 "hover": "bg-green-"600": text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">"""""",";";
                <Download : "className = "w-4 h-4"  />"",",;
                "Export": "</button>)"}";";
            """";";";
            <"button": "onClick="{()" => setShowFilters(!showFilters)"} className="{"px - 3" py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${showFilters""",";
            ? "bg-blue-"500": "text-white""""""",",",";
            : "bg-gray-"200": "dark": "bg-gray-"600": text-gray-700 "dark":text-gray-"300": "hover":bg-gray-"300": "dark":"hover":bg-gray-500","}"}>""""";";";
              <Filter : "className = "w-4 h-4"  />"",",;
              "Filters": "</button>;
          </div>"",,;
"""{/* comment */}""""{enableSearch && (<div className="relative">""""",";
            <Search : "className = "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"  />"""""",",";
            <"input": "type="text" placeholder="Search in all columns..." value="{searchQuery"}" onChange="{(e)" => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": "border-gray-"600": rounded-lg "focus":outline-"none": "focus":ring-"2": "focus":ring-blue-"500": "focus":border-"transparent": bg-white "dark":bg-gray-"700": text-gray-900 "dark":text-gray-100" />"",;
    // comment
    const getSortIcon = (props: any) => {}
        if(!enableSorting: || sortConfig ? .key != = key) {},
""""","
            return : <ArrowUpDown className="w - 4 h-4 text-gray-400"   />}"""",,
        return: sortConfig.direction === "asc"""""",,",
            ? <ChevronUp : className = "w-4 h-4 text-blue-500"  />""""",","
            : <ChevronDown : className="w-4 h-4 text-blue-500"  />}"
    // comment
    const renderCell = (props: any) => {}
        const value = item[column.key]
        if: (column.render) {}"
"";";"
            return: column.render(value, item, index)}""""";";"
        return: (<span className="{"truncate" ${column.align === "center" ? "text-center" : column.align: === "right" ? "text-right" : "text-left"}"}>";" {value}"
      </span>)}""
    return: (<div className="{"bg-white" dark: bg-gray-800: rounded-xl shadow-lg border border-gray-200 dark:border-gray-700: overflow-hidden ${classNam,e}"}>"""";" {/* comment */}""""";";"
      <div: className="p-4 border-b border-gray-200 dark: border-gray-700: bg-gray-50 dark:bg-gray-700">""""",";"
        <div: className = "flex items-center justify-between mb-4">""""",","
          <h3: className="text-lg font-semibold text-gray-900 dark: text-white">",
            Data: Table ({processedData.length} items)"
          """;";"
          <div: className="flex items-center gap-2">""""{enableExport && (<button onClick="{handleExport}" className="px-3 py-2 bg-green-500 hover: bg-green-600: text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">""""",";"
                <Download : className = "w-4 h-4"  />",",
                Export: </button>)}";"
            """";";"
            <button: onClick="{()" => setShowFilters(!showFilters)} className="{"px - 3" py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${showFilters""","
            ? "bg-blue-500: text-white"""""",",","
            : "bg-gray-200: dark: bg-gray-600: text-gray-700 dark:text-gray-300: hover:bg-gray-300: dark:hover:bg-gray-500,"}"}>""""";";"
              <Filter : className = "w-4 h-4"  />",",
              Filters: </button>
          </div>",,
"""{/* comment */}""""{enableSearch && (<div className="relative">""""","
            <Search : className = "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"  />""""",","
            <input: type="text" placeholder="Search in all columns..." value="{searchQuery}" onChange="{(e)" => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600: rounded-lg focus:outline-none: focus:ring-2: focus:ring-blue-500: focus:border-transparent: bg-white dark:bg-gray-700: text-gray-900 dark:text-gray-100" />",
          </div>)}
;
        {/* comment */}
;
        <AnimatePresence>;
          {showFilters && (<motion.div initial = {}
;
  {"opacity": ",0>;
  "height":  ",0}} "animate": "= {"}>;
  {"opacity": ",1",";";
  "height": "auto,"}} "exit": "= {"}";" {"opacity": ",0",";
  "height": "0": """,",";";
""""}} className="mt-"4": "p-4 bg-white "dark": bg-gray-"600": rounded-lg border border-gray-200 "dark":border-gray-500">"""""",";";
              <"h4": "className="font-medium text-gray-900 "dark": text-"white": mb-3">Advanced Filters</h4>"""""",";";
              <"div": "className="grid grid-cols-1 "md": grid-cols-"3": gap-4">""""{columns.filter(col => col.filterable != = false).map(column => (<div key="{String(column.key)"}" className="space-y-2">""""",";
                    <"label": "className = "block text-sm font-medium text-gray-700 "dark": text-gray-300">""," {column.header}
;
                    </label>;
                    <"select": "onChange = {"}>;
";" (e) => handleFilterChange(column.key, e.target.value,contains")""";";";
""""} className = "w - "full": "px-3 py-2 border border-gray-300 "dark": border-gray-"600": rounded-lg "focus":outline-"none": "focus":ring-"2": "focus":ring-blue-"500": bg-white "dark":bg-gray-"700": text-gray-900 "dark":text-gray-100">"""""",",;
                      <"option": "value="">No filter</option>"""""",;
                      <"option": "value = "contains">Contains</option>"""""",;
                      <"option": "value = "equals">Equals</option>"""""",;
                      <"option": "value="starts_with">Starts with</option>"""""",,",;
                      <"option": "value = "ends_with">Ends with</option>"",",            onExport(processedData)}
;
        else {}
;
            // comment;
            const csvContent = generateCSV(processedData, columns)";
            downloadCSV(csvContent,table-&apos;&apos;export.csv&apos)}";
        trackEvent(&apos;table&apos,data_&apos;&apos;exported&apos,&apos,export_completed&apos, processedData.length)}, [processedData, columns, onExport, trackEvent]);
}
    // comment;
    const generateCSV = ("props": "any) => {"}
;
        const headers = columns.map(col => col.header).join(");
}
        const rows = data.map(item => columns.map(col => {}
;
            const value = item[col.key]";
            return typeof value === "string" && value.includes(") ? ""${value}"" : "value"}).join("))";";
        return [headers, ...rows].join(";
")}
;
    // comment;
    const downloadCSV = ("props": "any) => {"}
;
        const blob = new Blob([content] {type "text/csv"});
}
&apos;&apos;&apos;&apos;
        const headers = columns.map(col => col.header).join(&apos);&apos,;
&apos;&apos,";&apos;&apos;
            const value = item[col.key]&apos;&apos;&apos,;
            return typeof value === &apos;string&apos; && value.includes(&apos) ? "&apos;${value}&apos;" : "value"}).join(&apos))";";
        return [headers, ...rows].join(&apos;";
&apos)}
;
    // comment;
        const blob = new Blob([content] {type &apos;text/csv&apos})";&apos;&apos,;
        const url = window.URL.createObjectURL(blob)";&apos;&apos;
        const a = document.createElement(&apos;a&apos);
}
            // comment;
            const csvContent = generateCSV(processedData, columns)";
            downloadCSV(csvContent, table - export.csv")}",;
        trackEvent("table", data_exported",export_completed", processedData.length)}, [processedData, columns, onExport, trackEvent]);
}
    // comment;
        const headers = columns.map(col => col.header).join();
}
"""";
            const value = item[col.key]"","";
            return typeof value === "string" && value.includes(") ? ""${value}"" : "value"}).join("))";
    // comment;
        const blob = new Blob([content] {type "text/csv"})";
        const url = window.URL.createObjectURL(blob)";
        const a = document.createElement("a");
}
        a.href = url;
        a.download = filename;
    // comment;
    const getSortIcon = ("props": "any) => {"}
;
        if(!enableSorting || sortConfig?.key !== key) {}";
            return <ArrowUpDown className="w-4 h-4 text-gray-400"   />}"";
        return sortConfig.direction === "asc""";";
            ? <ChevronUp className="w - 4 h-4 text-blue-500"   />"",;
&apos;&apos,&apos;";
            return&apos;&apos; <ArrowUpDown className="&apos;w-4" h-4 text-gray-400&apos;        />}&apos;&apos,";
        return sortConfig.direction === &apos;asc&apos;&apos,&apos;&apos;";
            ?&apos;&apos; <ChevronUp className="&apos;w-4" h-4 text-blue-500&apos;        />&apos;&apos,&apos;";
            : "&apos;&apos; <ChevronDown className="&apos;w-4" h-4 text-blue-500&apos;        />"}
;
    // comment;
"""";
            return <ArrowUpDown className = "w-4 h-4 text-gray-400"   />}""""";
        return sortConfig.direction === "asc""""";
            ? <ChevronUp className="w-4 h-4 text-blue-500"   />"""";
            : "<ChevronDown className="w-4 h-4 text-blue-500"   />"}
;
    // comment;
    const renderCell = ("props": "any) => {"}
;
        const;const;const value = item[column.key];
        if (column.render) {}";
"""";
"";
            return column.render(value, item, index)}"""";";
        return (<span className="{"truncate" ${column.align === "center" ? "text-center" : "column.align === "right" ? "text-right" : "text-left""}"}> {value}";
      </span>)}";
    return();
}
          </h3>"";";
          <div className="flex items-center gap-2">""{enableExport && (<button onClick="{handleExport}" className="px-3 py-2 bg-green-500 "hover": "bg-green-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">""",",;
                <Download className = "w-4 h-4"   />,;
                Export,;
              </button>)}";
            """;";
            <button onClick="{()" => setShowFilters(!showFilters)} className="{"px - 3" py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${showFilters"",;
            ? "bg - blue-500 text-white"""",;
            : "bg-gray-200 "dark": "bg-gray-600 text-gray-700 "dark":text-gray-300 "hover":bg-gray-300 "dark":"hover":bg-gray-500""}"}>"";";
              <Filter className="w-4 h-4"   />;
              Filters;
            </button>;
          </div>;";
""{/* comment */}""{enableSearch && (<div className="relative">"";";
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"   />"";";
            <input type="text" placeholder="Search in all columns..." value="{searchQuery}" onChange="{(e)" => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg "focus":outline-none "focus":ring-2 "focus":ring-blue-500 "focus":border-transparent bg-white "dark":bg-gray-700 text-gray-900 "dark":text-gray-100" />",,;
&apos,",;
            return column.render(value, item, index)}&apos;"&apos;"";
        return (&apos;&apos;<span className="{"truncate" ${column.align === &apos;center&apos; ? &apos;text-center&apos; : "column.align === &apos;right&apos; ? &apos;text-right&apos; : &apos;text-left&apos"}"}>;
        {value}"&apos;
    return (";
    <div className="{"bg-white" "dark": "bg-gray-800 rounded-xl shadow-lg border border-gray-200 dar","k": "border-gray-700 overflow-hidden ${className"}"}>&apos;&apos,";
      {/* comment */}&apos;&apos,&apos;&apos,";
      <div className="&apos;p-4" border-b border-gray-200 "dark": "border-gray-700 bg-gray-50 "dark":bg-gray-700&apos",>"&apos,&apos,&apos;&apos,",;
        <div className="&apos;flex" items-center justify-between mb-4&apos;>"&apos;&apos,&apos;&apos,";
          <h3 className = "&apos,text-lg" font-semibold text-gray-900 dar,"k": "text-white&apos",>;
            Data Table ({processedData.length} items)&apos;
          </h3>&apos;&apos,;
          &apos;&apos,&apos;&apos,";
          <div className="&apos;flex" items-center gap-2&apos;>"&apos;&apos,{enableExport && (&apos}&apos;<button onClick="{handleExport}" className="&apos;px-3" py-2 bg-green-500 "hover": "bg-green-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2&apos",>"&apos,&apos,&apos;&apos;";
                <Download className="&apos;w-4" h-4&apos;        />;
                Export&apos,",;
            "&apos,"&apos,";
            <button onClick="{()" => setShowFilters(!showFilters)} className="{"px-3" py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${showFilters&apos;&apos;";
            ? &apos;bg-blue-500 text-white&apos;&apos;"&apos;&apos;";
            : "&apos;bg-gray-200 "dark":bg-gray-600 text-gray-700 "dark":text-gray-300 "hover":bg-gray-300 "dark":hove","r": "bg-gray-500&apos"}"}>&apos;&apos,&apos;&apos,";
              <Filter className="&apos;w-4" h-4&apos;        />;
              Filters&apos;
            </button>";
&apos;&apos,{/* comment */}&apos;&apos,&apos {enableSearch && (&apos}&apos;<div className="&apos;relative&apos;">"&apos;&apos,&apos;&apos;";
            <Search className="&apos;absolute" left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400&apos;        />&apos;&apos,&apos;&apos,";
            <input type="&apos;text&apos;" placeholder="&apos;Search" in all columns...&apos; value="{searchQuery}" onChange="{(e)" => setSearchQuery(e.target.value)} className="&apos;w-full" pl-10 pr-4 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg "focus":outline-none "focus":ring-2 "focus":ring-blue-500 "focus":border-transparent bg-white "dark":bg-gray-700 text-gray-900 dar","k": "text-gray-100&apos",/>&apos,;
          "";"
          <div className="flex items-center gap-2">""{enableExport && (<button onClick="{handleExport}" className="px-3 py-2 bg-green-500 hover: bg-green-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">"",",
                <Download className = "w-4 h-4"   />,
                Export,
              </button>)}"
            """;"
            <button onClick="{()" => setShowFilters(!showFilters)} className="{"px - 3" py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${showFilters"",
            ? "bg - blue-500 text-white"""",
            : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"}"}>"";"
              <Filter className="w-4 h-4"   />
              Filters
            </button>
          </div>;"
""{/* comment */}""{enableSearch && (<div className="relative">"";"
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"   />"";"
            <input type="text" placeholder="Search in all columns..." value="{searchQuery}" onChange="{(e)" => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />,,
&apos,",
            return column.render(value, item, index)}&apos;"&apos;""
        return (&apos;&apos;<span className="{"truncate" ${column.align === &apos;center&apos; ? &apos;text-center&apos; : column.align === &apos;right&apos; ? &apos;text-right&apos; : &apos;text-left&apos}"}>
        {value}"&apos
    return ("
    <div className="{"bg-white" dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dar,k:border-gray-700 overflow-hidden ${className}"}>&apos;&apos,"
      {/* comment */}&apos;&apos,&apos;&apos,"
      <div className="&apos;p-4" border-b border-gray-200 dark: border-gray-700 bg-gray-50 dark:bg-gray-700&apos,>"&apos,&apos,&apos;&apos,",
        <div className="&apos;flex" items-center justify-between mb-4&apos;>"&apos;&apos,&apos;&apos,"
          <h3 className = "&apos,text-lg" font-semibold text-gray-900 dar,k: text-white&apos,>
            Data Table ({processedData.length} items)&apos
          &apos;&apos,
          &apos;&apos,&apos;&apos,"
          <div className="&apos;flex" items-center gap-2&apos;>"&apos;&apos,{enableExport && (&apos}&apos;<button onClick="{handleExport}" className="&apos;px-3" py-2 bg-green-500 hover: bg-green-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2&apos,>"&apos,&apos,&apos;&apos;"
                <Download className="&apos;w-4" h-4&apos;        />
                Export&apos,",
            "&apos,"&apos,"
            <button onClick="{()" => setShowFilters(!showFilters)} className="{"px-3" py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${showFilters&apos;&apos;"
            ? &apos;bg-blue-500 text-white&apos;&apos;"&apos;&apos;"
            : &apos;bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hove,r:bg-gray-500&apos}"}>&apos;&apos,&apos;&apos,"
              <Filter className="&apos;w-4" h-4&apos;        />
              Filters&apos
            </button>"
&apos;&apos,{/* comment */}&apos;&apos,&apos {enableSearch && (&apos}&apos;<div className="&apos;relative&apos;">"&apos;&apos,&apos;&apos;"
            <Search className="&apos;absolute" left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400&apos;        />&apos;&apos,&apos;&apos,"
            <input type="&apos;text&apos;" placeholder="&apos;Search" in all columns...&apos; value="{searchQuery}" onChange="{(e)" => setSearchQuery(e.target.value)} className="&apos;w-full" pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dar,k: text-gray-100&apos,/>&apos,
        {/* comment */}
;
          {showFilters && (}<motion.div initial = {}
;
  {"opacity": "0>;
  "height": 0"}} animate = {}
;
  {"opacity": "1",;
  "height": "&apos",auto&apos}} exit = {}>;
  "height": "0 &apos",&apos,",;
&apos,&apos,"&apos}} className="&apos;mt-4" p-4 bg-white "dark": "bg-gray-600 rounded-lg border border-gray-200 "dark":border-gray-500&apos",>"&apos,&apos,&apos;&apos,",;
              <h4 className="&apos;font-medium" text-gray-900 "dark": "text-white mb-3&apos;>Advanced Filters&apos",</h4>&apos,&apos,&apos,&apos,";
              <div className="&apos,grid" grid-cols-1 m,"d": "grid-cols-3 gap-4&apos",>"&apos,&apos,"{columns.filter(col => col.filterable !== false).map(column => (&apos}&apos;<div key="{String(column.key)}" className="&apos;space-y-2&apos;">"&apos;&apos,&apos;&apos;";
                    <label className="&apos;block" text-sm font-medium text-gray-700 "dark": "text-gray-300&apos",>;
                      {column.header}&apos;
                    <select onChange = {}>;
" (e) => handleFilterChange(column.key, e.target.value,contains&apos)"&apos;";
&apos;&apos,&apos} className="&apos;w-full" px-3 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg "focus":outline-none "focus":ring-2 "focus":ring-blue-500 bg-white "dark":bg-gray-700 text-gray-900 dar","k": "text-gray-100&apos",>"&apos,&apos,&apos;&apos;";
                      <option value="&apos;&apos;">No filter&apos;&apos;</option>&apos;&apos,&apos;&apos,";
                      <option value="&apos;contains&apos;">Contains&apos;</option>&apos;&apos,&apos;&apos,";
                      <option value="&apos;equals&apos;">Equals&apos;</option>&apos;&apos,&apos;&apos,";
                      <option value="&apos;starts_with&apos;">Starts with&apos;</option>&apos;&apos,&apos;&apos,",;
                      <option value="&apos;ends_with&apos;">Ends with&apos,</option>";
"","";
            return column.render(value, item, index)}""""";
        return (<span className = "{"truncate" ${column.align === "center" ? "text-center" : "column.align === "right" ? "text-right" : "text-left""}"}>;
        {value}";
    return (";
    <div className="{"bg-white" "dark": "bg-gray-800 rounded-xl shadow-lg border border-gray-200 "dark":border-gray-700 overflow-hidden ${className"}"}>""""";
      {/* comment */}"""";
      <div className="p-4 border-b border-gray-200 "dark": "border-gray-700 bg-gray-50 "dark":bg-gray-700">"""";
        <div className="flex items-center justify-between mb-4">"""";
          <h3 className="text-lg font-semibold text-gray-900 "dark":text-white">",;
            Data Table ({processedData.length} items)";
          </h3>"""";
          <div className="flex items-center gap-2">""""{enableExport && (<button onClick="{handleExport}" className="px-3 py-2 bg-green-500 "hover": "bg-green-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">"""";
                <Download className="w-4 h-4"   />;
                Export",;
              </button>)}";
            """";
            <button onClick="{()" => setShowFilters(!showFilters)} className="{"px - 3" py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${showFilters""",;
            ? "bg-blue-500 text-white"""""""";
            : "bg-gray-200 "dark": "bg-gray-600 text-gray-700 "dark":text-gray-300 "hover":bg-gray-300 "dark":"hover":bg-gray-500""}"}>"""";
              <Filter className = "w-4 h-4"   />;
              Filters";
"""{/* comment */}""""{enableSearch && (<div className="relative">""""";
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"   />"""";
            <input type="text" placeholder="Search in all columns..." value="{searchQuery}" onChange="{(e)" => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg "focus":outline-none "focus":ring-2 "focus":ring-blue-500 "focus":border-transparent bg-white "dark":bg-gray-700 text-gray-900 "dark":text-gray-100" />",;
  {opacity: 0>
  height: 0}} animate = {}
  {opacity: 1,
  height: &apos,auto&apos}} exit = {}>
  height: 0 &apos,&apos,",
&apos,&apos,"&apos}} className="&apos;mt-4" p-4 bg-white dark: bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-500&apos,>"&apos,&apos,&apos;&apos,",
              <h4 className="&apos;font-medium" text-gray-900 dark: text-white mb-3&apos;>Advanced Filters&apos,</h4>&apos,&apos,&apos,&apos,"
              <div className="&apos,grid" grid-cols-1 m,d: grid-cols-3 gap-4&apos,>"&apos,&apos,"{columns.filter(col => col.filterable !== false).map(column => (&apos}&apos;<div key="{String(column.key)}" className="&apos;space-y-2&apos;">"&apos;&apos,&apos;&apos;"
                    <label className="&apos;block" text-sm font-medium text-gray-700 dark: text-gray-300&apos,>
                      {column.header}&apos
                    <select onChange = {}>
" (e) => handleFilterChange(column.key, e.target.value,contains&apos)"&apos;"
&apos;&apos,&apos} className="&apos;w-full" px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dar,k: text-gray-100&apos,>"&apos,&apos,&apos;&apos;"
                      <option value="&apos;&apos;">No filter&apos;&apos;</option>&apos;&apos,&apos;&apos,"
                      <option value="&apos;contains&apos;">Contains&apos;</option>&apos;&apos,&apos;&apos,"
                      <option value="&apos;equals&apos;">Equals&apos;</option>&apos;&apos,&apos;&apos,"
                      <option value="&apos;starts_with&apos;">Starts with&apos;</option>&apos;&apos,&apos;&apos,",
                      <option value="&apos;ends_with&apos;">Ends with&apos,</option>"
"",""
            return column.render(value, item, index)}"""""
        return (<span className = "{"truncate" ${column.align === "center" ? "text-center" : column.align === "right" ? "text-right" : "text-left"}"}>
        {value}"
    return ("
    <div className="{"bg-white" dark: bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${className}"}>"""""
      {/* comment */}""""
      <div className="p-4 border-b border-gray-200 dark: border-gray-700 bg-gray-50 dark:bg-gray-700">""""
        <div className="flex items-center justify-between mb-4">""""
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">,
            Data Table ({processedData.length} items)"
          """"
          <div className="flex items-center gap-2">""""{enableExport && (<button onClick="{handleExport}" className="px-3 py-2 bg-green-500 hover: bg-green-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">""""
                <Download className="w-4 h-4"   />
                Export,
              </button>)}"
            """"
            <button onClick="{()" => setShowFilters(!showFilters)} className="{"px - 3" py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${showFilters""",
            ? "bg-blue-500 text-white""""""""
            : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"}"}>""""
              <Filter className = "w-4 h-4"   />
              Filters"
"""{/* comment */}""""{enableSearch && (<div className="relative">"""""
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"   />""""
            <input type="text" placeholder="Search in all columns..." value="{searchQuery}" onChange="{(e)" => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark: border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100" />,
        <AnimatePresence> {showFilters && (<motion.div initial = {}
;
  {"opacity": "0",";
"height": "auto"}} exit = {}";
  "height": "0 """,";
""}} className="mt-4 p-4 bg-white "dark": "bg-gray-600 rounded-lg border border-gray-200 "dark":border-gray-500">""",";
              <h4 className="font-medium text-gray-900 "dark": "text-white mb-3">Advanced Filters</h4>""",";
              <div className="grid grid-cols-1 "md": "grid-cols-3 gap-4">""{columns.filter(col => col.filterable !== false).map(column => (<div key="{String(column.key)"}" className="space-y-2">"";";
                    <label className = "block text-sm font-medium text-gray-700 "dark": "text-gray-300"> {"opacity": 0", "height": "0"}} animate = {}
;
  { "opacity": "1",";"";
  { "opacity": "0", "height": "0 """",";
""""}} className = "mt-4 p-4 bg-white "dark": "bg-gray-600 rounded-lg border border-gray-200 "dark":border-gray-500">"""";
              <h4 className="font-medium text-gray-900 "dark":text-white mb-3">Advanced Filters</h4>""""",;
              <div className="grid grid-cols-1 "md": "grid-cols-3 gap-4">""""{columns.filter(col => col.filterable !== false).map(column => (<div key="{String(column.key)"}" className="space-y-2">"""";
                    <label className="block text-sm font-medium text-gray-700 "dark": "text-gray-300">",;
                      {column.header}
;
                    </label>;
" (e) => handleFilterChange(column.key, e.target.value,contains")"";";
""} className = "w - full px-3 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg "focus":outline-none "focus":ring-2 "focus":ring-blue-500 bg-white "dark":bg-gray-700 text-gray-900 "dark":text-gray-100">""",;
                      <option value=">No filter</option>"",;
                      <option value = "contains">Contains</option>"",;
                      <option value="equals">Equals</option>"",;
                      <option value="starts_with">Starts with</option>"",",;
                      <option value = "ends_with">Ends with</option>,;
                    </select>,";
  (e) => handleFilterChange(column.key, e.target.value,contains")""";
""""} className="w-full px-3 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg "focus":outline-none "focus":ring-2 "focus":ring-blue-500 bg-white "dark":bg-gray-700 text-gray-900 "dark":text-gray-100">""""";
                      <option value="">No filter</option>""""";
                      <option value="contains">Contains</option>""""";
                      <option value="equals">Equals</option>""""";
                      <option value="starts_with">Starts with</option>""""";
                      <option value="ends_with">Ends with</option>;
                    </select>",                  </div>))}
;
            </motion.div>) }
;
        </AnimatePresence>;
""{/* comment */}"";";
      <div className="overflow-hidden">""{/* comment */}"";";
        <div className = "bg-gray-100 "dark": "bg-gray-700 border-b border-gray-200 "dark":border-gray-600">""",";
          <div className="flex items-center px-4 py-3">""{enableSelection && (<div className="w-8 mr-2">"",";
                <input type="checkbox" checked="{selectedItems.size" === paginatedData.length && paginatedData.length > 0} onChange="{(e)" => handleSelectAll(e.target.checked)} className="w-4 h-4 text-blue-600 border-gray-300 rounded "focus": "ring-blue-500" />",;
              </div>)}"";";
            """"{columns.map(column => (<div key="{String(column.key)}" className="{"flex-1" px-2 py-1 ${column.width ? "w-${column.width}" : "}"} style="{{" "width": "column.width "}}>"""";";
                <button onClick="{()" => handleSort(column.key)} disabled="{!enableSorting" || !column.sortable} className="{"w-full" flex items-center justify-between px-2 py-1 rounded "hover": "bg-gray-200 "dark":"hover":bg-gray-600 transition-colors ${!enableSorting || !column.sortable ? "cursor-default" : "cursor-pointer""}"}>"";";
                  <span className = "font-medium text-gray-700 "dark": "text-gray-300 text-sm">",;
        </AnimatePresence>;
"""{/* comment */}""""";";";
      <"div": "className="overflow - hidden">"""{/* comment */"}""""",";
        <"div": "className="bg-gray-100 "dark": bg-gray-"700": border-b border-gray-200 "dark":border-gray-600">"""""",";";
          <"div": "className = "flex items-center px-4 py-3">""""{enableSelection && (<div className="w-8 mr-2">"""""",",";
                <"input": "type="checkbox" checked="{selectedItems.size" === paginatedData.length && paginatedData.length > 0"} onChange="{(e)" => handleSelectAll(e.target.checked)} className="w-4 h-4 text-blue-600 border-gray-300 rounded "focus": "ring-blue-500" />"",",;
              </div>)}""";";";
            """"{columns.map("column": "=> (<div key="{String(column.key)"}" className="{"flex-1" px-2 py-1 ${column.width ? "w-${column.width}" : ""}"} style="{{" "width": "column.width"}}>"""""";";";
                <"button": "onClick="{()" => handleSort(column.key)"} disabled="{!enableSorting" || !column.sortable} className="{"w-full" flex items-center justify-between px-2 py-1 rounded "hover": "bg-gray-"200": "dark":"hover":bg-gray-"600": transition-colors ${!enableSorting || !column.sortable ? "cursor-default" : "cursor-pointer","}"}>""""";";";
                  <"span": "className = "font-medium text-gray-700 "dark": text-gray-"300": text-sm">""," {column.header}
;
&apos;&apos,{/* comment */}&apos;&apos,&apos;&apos,";
      <div className="&apos;overflow-hidden&apos;">"&apos;&apos {/* comment */}&apos;&apos,&apos;&apos,";
        <div className="&apos;bg-gray-100" "dark": "bg-gray-700 border-b border-gray-200 dar","k": "border-gray-600&apos",>"&apos,&apos,&apos;&apos,",;
          <div className="&apos;flex" items-center px-4 py-3&apos;>"&apos,&apos,"{enableSelection && (&apos}&apos;<div className="&apos;w-8" mr-2&apos;>"&apos;&apos,&apos;&apos;";
                <input type="&apos;checkbox&apos;" checked="{selectedItems.size" === paginatedData.length && paginatedData.length > 0} onChange="{(e)" => handleSelectAll(e.target.checked)} className="&apos;w-4" h-4 text-blue-600 border-gray-300 rounded "focus": "ring-blue-500&apos",/>&apos,;
              </div>)}&apos;"";
            &apos;"&apos;"{columns.map(column => (&apos}&apos;<div key="{String(column.key)}" className="{"flex-1" px-2 py-1 ${column.width ? "w-${column.width}" : "&apos;&apos"}"} style="{{" "width": "column.width "}}>&apos;""&apos;"&apos,";
                <button onClick="{()" => handleSort(column.key)} disabled="{!enableSorting" || !column.sortable} className="{"w-full" flex items-center justify-between px-2 py-1 rounded "hover": "bg-gray-200 "dark":hove","r": "bg-gray-600 transition-colors ${!enableSorting || !column.sortable ? &apos",cursor-default&apos, : "&apos",cursor-pointer&apos}"}>&apos;&apos,&apos;&apos,";
                  <span className="&apos;font-medium" text-gray-700 "dark": "text-gray-300 text-sm&apos",>;
                  </span>;
                  {column."sortable": "!== false && getSortIcon(column.key)"}";
              </div>))}"""",";
            """"{"enableActions": "&& (<div className = "w-20 px-2 py-1">"""""",",";
                <"span": "className = "font - medium text-gray-700 "dark": text-gray-"300": text-sm">Actions</span>"",",;
"""{/* comment */}""""",";
        <"div": "{...containerProps"} className="relative">";
          <"div": "{...listProps"}>"            {virtualItems.map((item, index) => (<motion.div key = "{String(item.id" || index)} initial = {}
;
  "y": "2",0}} "animate": "= {"}
;
  {"opacity": ",1",>;
  "y": "0": "",",";";";
""""}} className="{""flex":" items-center px-4 py-3 border-b border-gray-100 "dark": "border-gray-"600": "hover":bg-gray-"50": "dark":"hover":bg-gray-"700": transition-colors ${onRowClick ? "cursor-pointer" : "","} ${selectedItems.has(String(item."id": "|| JSON.stringify(item))) ? "bg-blue-50 "dark": bg-blue-900/20" : "","}"} "onClick": "= {"}";" () => onRowClick?.(item,;
  index)";
"""}>""""{"enableSelection": "&& (<div className = "w-8 mr-2">"""""",",";
                    <"input": "type = "checkbox" checked="{selectedItems.has(String(item.id" || JSON.stringify(item)))"} onChange = {}", (e) => handleSelectionChange(item,";
  e.target.checked)"""";";";
""""} onClick="{(e)" => e.stopPropagation()} className="w-"4": "h-4 text-blue-600 border-gray-300 rounded "focus": ring-blue-500" />"",";";
                """"{columns.map("column": "=> (<div key="{String(column.key)"}" className="{"flex-1" px-2 py-1 ${column.width ? "w-${column.width}" : ""}"} style="{{" "width": "column.width"}}>";" {renderCell(column, item, index)}";
                """"{"enableActions": "&& (<div className = "w-20 px-2 py-1 flex items-center gap-1">"""""",",";
                    <"button": "className="p-1 text-gray-400 "hover": text-blue-"500": transition-colors">"""""",";";
                      <Eye : "className="w-4 h-4"  />""""",,",;
                    </button>""""",",";
                    <"button": "className="p-1 text-gray-400 "hover": text-green-"500": transition-colors">"""""",";";
                      <Edit : "className = "w-4 h-4"  />""""",",";
                    <"button": "className="p-1 text-gray-400 "hover": text-red-"500": transition-colors">"""""",";";
                      <Trash2 : "className = "w-4 h-4"  />"",",;
              </div>))}&apos;&apos,";
            &apos;&apos,&apos {enableActions && (&apos}&apos;<div className="&apos;w-20" px-2 py-1&apos;>"&apos;&apos,&apos;&apos;";
                <span className="&apos;font-medium" text-gray-700 "dark": "text-gray-300 text-sm&apos",>Actions&apos,</span>",;
&apos,&apos,"{/* comment */}&apos;&apos,&apos;&apos,";
        <div {...containerProps} className="&apos;relative&apos;">&apos,;
          <div {...listProps}>"            {virtualItems.map((item, index) => (}<motion.div key = "{String(item.id" || index)} initial = {}
;
  "y": "20"}} animate = {}
;
  {"opacity": "1",>;
  "y": "0 &apos",",",;
&apos,"&apos,"}} className="{"flex" items-center px-4 py-3 border-b border-gray-100 "dark": "border-gray-600 "hover":bg-gray-50 "dark":hove","r": "bg-gray-700 transition-colors ${onRowClick ? &apos",cursor-pointer&apos, : "&apos",&apos} ${selectedItems.has(String(item.id || JSON.stringify(item))) ? &apos;bg-blue-50 "dark": "bg-blue-900/20&apos", : "&apos",&apos}"} onClick = {}
;
  () => onRowClick?.(item,";
&apos;&apos}>&apos;&apos,&apos {enableSelection && (&apos}&apos;<div className="&apos;w-8" mr-2&apos;>"&apos;&apos,&apos;&apos;";
                    <input type="&apos;checkbox&apos;" checked = "{selectedItems.has(String(item.id" || JSON.stringify(item)))} onChange = {}
;
  (e) => handleSelectionChange(item,;
  e.target.checked)&apos;&apos,";
&apos;&apos,&apos} onClick="{(e)" => e.stopPropagation()} className="&apos;w-4" h-4 text-blue-600 border-gray-300 rounded "focus": "ring-blue-500&apos",/>&apos,&apos,",;
                &apos,"&apos,"{columns.map(column => (&apos}&apos;<div key="{String(column.key)}" className="{"flex-1" px-2 py-1 ${column.width ? "w-${column.width}" : "&apos;&apos"}"} style = "{{" "width": "column.width "}}>;
                    {renderCell(column, item, index)}&apos;&apos;";
                &apos;&apos,&apos {enableActions && (&apos}&apos;<div className="&apos;w-20" px-2 py-1 flex items-center gap-1&apos;>"&apos;&apos,&apos;&apos;";
                    <button className="&apos;p-1" text-gray-400 "hover": "text-blue-500 transition-colors&apos",>"&apos,&apos,&apos;&apos;";
                      <Eye className="&apos;w-4" h-4&apos;        />&apos;&apos,&apos;&apos,;
                    </button>&apos;&apos,&apos;&apos,";
                    <button className="&apos;p-1" text-gray-400 "hover": "text-green-500 transition-colors&apos",>"&apos,&apos,&apos;&apos,",;
                      <Edit className="&apos;w-4" h-4&apos;        />&apos;&apos,&apos;&apos,";
                    <button className="&apos,p-1" text-gray-400 hove,"r": "text-red-500 transition-colors&apos",>"&apos,&apos,&apos;&apos,",;
                      <Trash2 className="&apos;w-4" h-4&apos,        />&apos,";
"""{/* comment */}""""";
      <div className = "overflow-hidden">"""{/* comment */}""""";
        <div className="bg-gray-100 "dark": "bg-gray-700 border-b border-gray-200 "dark":border-gray-600">"""";
          <div className="flex items-center px-4 py-3">""""{enableSelection && (<div className="w-8 mr-2">""""",;
                <input type="checkbox" checked="{selectedItems.size" === paginatedData.length && paginatedData.length > 0} onChange="{(e)" => handleSelectAll(e.target.checked)} className="w-4 h-4 text-blue-600 border-gray-300 rounded "focus": "ring-blue-500" />"",;
              </div>)}""";
            """"{columns.map(column => (<div key="{String(column.key)}" className="{"flex-1" px-2 py-1 ${column.width ? "w-${column.width}" : ""}"} style="{{" "width": "column.width "}}>"""""";
                <button onClick="{()" => handleSort(column.key)} disabled="{!enableSorting" || !column.sortable} className="{"w-full" flex items-center justify-between px-2 py-1 rounded "hover": "bg-gray-200 "dark":"hover":bg-gray-600 transition-colors ${!enableSorting || !column.sortable ? "cursor-default" : "cursor-pointer""}"}>"""";
                  <span className="font-medium text-gray-700 "dark": "text-gray-300 text-sm">",;
                  </span> {column.sortable !== false && getSortIcon(column.key)}
;
              </div>))}"";";
            ""{enableActions && (<div className="w-20 px-2 py-1">"";";
                <span className = "font-medium text-gray-700 "dark": "text-gray-300 text-sm">Actions</span>",;
""{/* comment */}"";";
        <div {...containerProps} className="relative">;";
          <div {...listProps}> {virtualItems.map((item, index) => (<motion.div key = "{String(item.id" || index)} initial = {}
;
  {"opacity": "1",";
"y": "0 """,";
""""}} className="{"flex" items-center px-4 py-3 border-b border-gray-100 "dark": "border-gray-600 "hover":bg-gray-50 "dark":"hover":bg-gray-700 transition-colors ${onRowClick ? "cursor-pointer" : ""} ${selectedItems.has(String(item.id || JSON.stringify(item))) ? "bg-blue-50 "dark": "bg-blue-900/20" : ""}"} onClick = {}>;
  () => onRowClick?.(item,;
  index);";
""}>""{enableSelection && (<div className="w-8 mr-2">"";";
                    <input type = "checkbox" checked="{selectedItems.has(String(item.id" || JSON.stringify(item)))} onChange = {}>;
  (e) => handleSelectionChange(item,;
  e.target.checked)"";";
""} onClick = "{(e)" => e.stopPropagation()} className="w-4 h-4 text-blue-600 border-gray-300 rounded "focus": "ring-blue-500" />",";
                """"{columns.map(column => (<div key="{String(column.key)}" className="{"flex-1" px-2 py-1 ${column.width ? "w-${column.width}" : "}"} style="{{" "width": "column.width "}}> {renderCell(column, item, index)}";
                ""{enableActions && (<div className="w-20 px-2 py-1 flex items-center gap-1">"";";
                    <button className="p-1 text-gray-400 "hover": "text-blue-500 transition-colors">""",";
                      <Eye className="w-4 h-4"   />"",;
                    </button>"";";
                    <button className="p-1 text-gray-400 "hover": "text-green-500 transition-colors">""",";
                      <Edit className="w-4 h-4"   />"",",;
                    <button className = "p-1 text-gray-400 "hover": "text-red-500 transition-colors">""",";
                      <Trash2 className="w-4 h-4"   />,;
                  </div>)}
;
              </motion.div>) ) }";
""{/* comment */}""{enablePagination && totalPages > 1 && (<div className="px-4 py-3 border-t border-gray-200 "dark": "border-gray-700 bg-gray-50 "dark":bg-gray-700">""",",;
          <div className = "flex items-center justify-between">"",";
            <div className="text-sm text-gray-700 "dark": "text-gray-300">",;
              Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, processedData.length)} of {processedData.length} results,;
            </div>"";";
            <div className="flex items-center gap-2">;
              <button onClick = {}>;
  () => setCurrentPage(prev = > Math.max(1,,;
  prev - 1))"";";
""} disabled = "{currentPage" === 1} className="px-3 py-1 text-sm border border-gray-300 "dark": "border-gray-600 rounded "hover":bg-gray-100 "dark":"hover":bg-gray-600 "disabled":opacity-50 "disabled":cursor-not-allowed transition-colors">",;
                Previous,;
              </button> {Array.from({ "length": "Math.min(5", totalPages) }, (_, i) => {}";
              </div>))}"""";
            """"{enableActions && (<div className="w-20 px-2 py-1">"""";
                <span className="font-medium text-gray-700 "dark": "text-gray-300 text-sm">Actions</span>"",;
"""{/* comment */}""""";
        <div {...containerProps} className="relative">;
  {"opacity": "0", "y": "20"}} animate = {}";
  "y": "0 """,";
""""}} className="{"flex" items-center px-4 py-3 border-b border-gray-100 "dark": "border-gray-600 "hover":bg-gray-50 "dark":"hover":bg-gray-700 transition-colors ${onRowClick ? "cursor-pointer" : """} ${selectedItems.has(String(item.id || JSON.stringify(item))) ? "bg-blue-50 "dark": "bg-blue-900/20" : """}"} onClick = {}
;
  () => onRowClick?.(item, index)";
"""}>""""{enableSelection && (<div className="w-8 mr-2">"""""";
  (e) => handleSelectionChange(item, e.target.checked)"""";
""""} onClick="{(e)" => e.stopPropagation()} className="w-4 h-4 text-blue-600 border-gray-300 rounded "focus": "ring-blue-500" />"",;
                """"{columns.map(column => (<div key="{String(column.key)}" className="{"flex-1" px-2 py-1 ${column.width ? "w-${column.width}" : ""}"} style="{{" "width": "column.width "}}>;
                    {renderCell(column, item, index)}";
                """"{enableActions && (<div className="w-20 px-2 py-1 flex items-center gap-1">"""";
                    <button className="p-1 text-gray-400 "hover": "text-blue-500 transition-colors">"""";
                      <Eye className="w-4 h-4"   />""""";
                    </button>"""";
                    <button className="p-1 text-gray-400 "hover":text-green-500 transition-colors">"""";
                      <Edit className="w-4 h-4"   />"""";
                    <button className="p-1 text-gray-400 "hover":text-red-500 transition-colors">"""";
                      <Trash2 className="w-4 h-4"   />"",,;
"""{/* comment */}""""{enablePagination && totalPages > 1 && (<div className="px-4 py-3 border-t border-gray-200 "dark": "border-gray-"700": bg-gray-50 "dark":bg-gray-700">"""""",";";
          <"div": "className = "flex items-center justify-between">"""""",",";
            <"div": "className="text-sm text-gray-700 "dark": text-gray-300">"",;
              "Showing": "{((currentPage - 1) * pageSize) + 1"} to {Math.min(currentPage * pageSize, processedData.length)} of {processedData.length} results";
            </div>""",";
            <"div": "className = "flex items-center gap-2">"",",;
              <"button": "onClick = {"}
;
  () => setCurrentPage(prev => Math.max(1,;
  prev - 1))""",";
""""} disabled="{"currentPage":" === 1} className="px-3 py-1 text-sm border border-gray-300 "dark": "border-gray-"600": rounded "hover":bg-gray-"100": "dark":"hover":bg-gray-"600": "disabled":opacity-"50": "disabled":cursor-not-"allowed": transition-colors">"",;
                "Previous": "</button>",;
              {Array.from({ "length": "Math.min(",5, totalPages) }, (_, i) => {}
;
";";
""";";";
""""";";";
                const page = i + 1";"""""";";";
                "return": "(<button key="{page"}" onClick="{()" => setCurrentPage(page)} className="{"px-3" py-1 text-sm rounded transition-colors ${currentPage == = page""""""",";
                        ? "bg-blue-"500": "text-white""""""""""",",";
                        : ""border": "border-gray-300 "dark": border-gray-"600": "hover":bg-gray-"100": "dark":"hover":bg-gray-600","}"}>{page}";";
                  </button>)})}
;
  () => setCurrentPage(prev = > Math.min(totalPages,;
  prev + 1))""",";
""""} disabled="{"currentPage":" === totalPages} className="px-3 py-1 text-sm border border-gray-300 "dark": "border-gray-"600": rounded "hover":bg-gray-"100": "dark":"hover":bg-gray-"600": "disabled":opacity-"50": "disabled":cursor-not-"allowed": transition-colors">"",;
                "Next": "</button>"",;
    </div>)}""";";";
""""""";";";";
&apos;&apos,{/* comment */}&apos;&apos,&apos {enablePagination && totalPages > 1 && (&apos}&apos;<div className="&apos;px-4" py-3 border-t border-gray-200 "dark": "border-gray-700 bg-gray-50 "dark":bg-gray-700&apos",>"&apos,&apos,&apos;&apos,",;
          <div className="&apos;flex" items-center justify-between&apos;>"&apos;&apos,&apos;&apos,";
            <div className = "&apos,text-sm" text-gray-700 dar,"k": "text-gray-300&apos",>;
              Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, processedData.length)} of {processedData.length} results&apos;
            </div>&apos;&apos;";
            <div className="&apos;flex" items-center gap-2&apos;>&apos,;
  prev - 1))&apos;&apos;";
&apos;&apos,&apos} disabled="{currentPage" === 1} className="&apos;px-3" py-1 text-sm border border-gray-300 "dark": "border-gray-600 rounded "hover":bg-gray-100 "dark":"hover":bg-gray-600 "disabled":opacity-50 "disabled":cursor-not-allowed transition-colors&apos",>,;
                Previous&apos,&apos,";
"""{/* comment */}""""{enablePagination && totalPages > 1 && (<div className = "px-4 py-3 border-t border-gray-200 "dark": "border-gray-700 bg-gray-50 "dark":bg-gray-700">""""";
          <div className="flex items-center justify-between">"""";
            <div className="text-sm text-gray-700 "dark":text-gray-300">",;
              Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, processedData.length)} of {processedData.length} results";
            </div>"""";
            <div className="flex items-center gap-2">";
  () => setCurrentPage(prev => Math.max(1, prev - 1))"""";
""""} disabled="{currentPage" === 1} className="px-3 py-1 text-sm border border-gray-300 "dark": "border-gray-600 rounded "hover":bg-gray-100 "dark":"hover":bg-gray-600 "disabled":opacity-50 "disabled":cursor-not-allowed transition-colors">;
                Previous",;
              {Array.from({ lengt,"h": "Math.min(5", totalPages) }, (_, i) => {}
;
";
"&apos;";
"&apos;"&apos;";&apos;&apos;
                const page = i + 1";&apos;"&apos;"&apos;"";
                return (&apos;&apos;<button key="{page}" onClick="{()" => setCurrentPage(page)} className="{"px-3" py-1 text-sm rounded transition-colors ${currentPage === page&apos;&apos;"&apos;"&apos;";
                        ? &apos;bg-blue-500 text-white&apos;&apos;"&apos;"&apos;"&apos;";
                        : "&apos;border border-gray-300 "dark":border-gray-600 "hover":bg-gray-100 "dark":hove","r": "bg-gray-600&apos"}"}>{page}&apos;&apos;
  prev + 1))&apos;&apos;";
&apos;&apos,&apos} disabled="{currentPage" === totalPages} className="&apos;px-3" py-1 text-sm border border-gray-300 "dark": "border-gray-600 rounded "hover":bg-gray-100 "dark":"hover":bg-gray-600 "disabled":opacity-50 disable","d": "cursor-not-allowed transition-colors&apos",>;
                Next&apos,&apos,",;
""","";
""""",";
                const page = i + 1"""""""";
                return (<button key="{page}" onClick="{()" => setCurrentPage(page)} className="{"px-3" py-1 text-sm rounded transition-colors ${currentPage === page""""""";
                const page = i + 1";""""";";
                return (<button key="{page}" onClick="{()" => setCurrentPage(page)} className="{"px-3" py-1 text-sm rounded transition-colors ${currentPage === page"""""";
                        ? "bg - blue-500 text-white"""""""",;
                        : "border border - gray-300 "dark": "border-gray-600 "hover":bg-gray-100 "dark":"hover":bg-gray-600""}"}>{page}
;
  () => setCurrentPage(prev => Math.min(totalPages,,;
  prev + 1))"";";
""} disabled="{currentPage" === totalPages} className="px-3 py-1 text-sm border border-gray-300 "dark": "border-gray-600 rounded "hover":bg-gray-100 "dark":"hover":bg-gray-600 "disabled":opacity-50 "disabled":cursor-not-allowed transition-colors">",,;
                Next,";
"""""";
                const page = i + 1",""""""";
                return (<button key="{page}" onClick="{()" => setCurrentPage(page)} className="{"px-3" py-1 text-sm rounded transition-colors ${currentPage === page""""""";
                        ? "bg-blue-500 text-white"""""""""";
  () => setCurrentPage(prev = > Math.min(totalPages, prev + 1))"""";
""""} disabled="{currentPage" === totalPages} className="px-3 py-1 text-sm border border-gray-300 "dark": "border-gray-600 rounded "hover":bg-gray-100 "dark":"hover":bg-gray-600 "disabled":opacity-50 "disabled":cursor-not-allowed transition-colors">;
                Next"",;
    </div>)}"""";
""""""";
    </div>)}&apos;&apos;";";
&apos;&apos;"&apos;&quot;"&quot;";
    </div>)}""";
    const {trackEvent} = useAnalytics({"enableTracking": "true", "enableUserBehaviorTracking": "true"})";
";";
;";
const page = i + 1;`;
                return (<button key={page} onClick={() => setCurrentPage(page)} className={`px-3 py-1 text-sm rounded transition-colors ${currentPage === page';
                        ? 'bg-blue-500 text-white''`;
                        : 'border border-gray-300 "dark": "border-gray-600 "hover":bg-gray-100 "dark":"hover":bg-gray-600'"}`}>;
                    {page}
                  </button>) }) }
;
              <button onClick={() => setCurrentPage(prev => Math.min (totalPages,;
  prev + 1) )} disabled={currentPage === totalPages} className="px-3 py-1 text-sm border border-gray - 300 "dark": "border-gray - 600 rounded "hover":bg-gray - 100 "dark":"hover":bg-gray - 600 "disabled":opacity - 50 "disabled":cursor - not - allowed transition -colors">                Next;
              </button>;
            </div>;
          </div>;
        </div>)"}
    </div>)};
'"`;
</button>;
</button>;
</button>;
</button>;
</div>;
</button>;
</div>;
</div>;
</div>;
</div>;
</div>;
</div>;
</div>;
</button>;
</button>;
</div>;
</div>;
</motion>;
</div>;
</div>;
</div>;
</button>;
</div>;
</div>;
</div>;
</button>;
</button>;
</div>;
</div>;
</div>;
</motion>;
</div>;
</div>;
</div>;
</button>;
</button>;
</div>;
</div>;
</motion>;
</div>;
</div>;
</div>;
</button>;
</div>;
</div>;
</div>;
</span>;
</button>;
</div>;
</div>;
</div>;
</div>;
</span>;
</button>;
</div>;
</div>;
</div>;
</div>;
</div>;
</label>;
</div>;
</div>;
</motion>;
</div>;
</button>;
</div>;
</div>;
</div>;
</div>;
</span>;
</label>;
</div>;
</div>;
</motion>;
</div>;
</button>;
</div>;
</div>;
</div>;
</div>;
</span>;
</div>;
</div>;
</div>;
</motion>;
</div>;
</div>;
</div>