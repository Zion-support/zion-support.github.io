"type": 'redirect',"`'"`,"}),"}),',
type: 'redirect',"`'"`,"}
    ),"}),,
    ',',',
 export const LinkMonitor = memo(({onLinkIssue, autoFix = false, showStatus = true}) => { const [brokenLinks, setBrokenLinks] = useState ([])  const [fixedLinks, setFixedLinks] = useState ([])  const [isScanning, setIsScanning] = useState (false)  const [scanProgress, setScanProgress] = useState (0)  const [lastScanTime, setLastScanTime] = useState (null) ''',',',
",