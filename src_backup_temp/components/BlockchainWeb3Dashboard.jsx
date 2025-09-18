<<<<<<< HEAD
import {useState, useCallback} from 'react';';
import {motion, AnimatePresence} from 'framer-motion';';
import {Wallet, Smartphone, Coins, Image, TrendingUp, BarChart3, Plus, Send, Download, Loader2} from 'lucide-react';
;
;
export const BlockchainWeb3Dashboard = ("props": "any) => {;
    const { trackEvent "} = useAnalytics({"enableTracking": "true",;
        "enableUserBehaviorTracking": "true;"});';
import {useState, useCallback} from 'react';'
import {motion, AnimatePresence} from 'framer-motion';'
import {Wallet, Smartphone, Coins, Image, TrendingUp, BarChart3, Plus, Send, Download, Loader2} from 'lucide-react';
;
;
export const BlockchainWeb3Dashboard = (props: any) => {
    const { trackEvent } = useAnalytics({enableTracking: true,
        enableUserBehaviorTracking: true;}
    );'
    const [activeTab, setActiveTab] = useState('overview');
    const [showMintNFT, setShowMintNFT] = useState(false);
    const [showSendTransaction, setShowSendTransaction] = useState(false);
    const {wallet, contracts, nfts, defiPositions, transactions, metrics, isConnecting, isProcessing, connectWallet, disconnectWallet, switchNetwork, addContract, mintNFT, sendTransaction, createDeFiPosition} = useBlockchainWeb3();
    const [nftForm, setNftForm] = useState({}
';
'';
''';
        "name": '',''';
        "description": '',''';
        "image": '';
    });
    const [transactionForm, setTransactionForm] = useState({}
';
'';
''';
        "to": '',''';
        "value": '',''';
        "data": '';
    });
const handleConnectWallet = useCallback(async () => {}
;
        "try": "{"},;
            "await": "connectWallet()"",",";
            trackEvent("blockchain",dashboard",wallet_connected")}";
        "catch": "(error) {"}";
            // comment;
export const BlockchainWeb3Dashboard = ("props": "any) => {";
    const { trackEvent "} = useAnalytics();"""""""";
export const BlockchainWeb3Dashboard = ("props": "any) => {const { trackEvent "} = useAnalytics({"enableTracking": "true", "enableUserBehaviorTracking": "true"})";""""""";
export const BlockchainWeb3Dashboard = memo(({className = ""}) => {;
    const { trackEvent } = useAnalytics({"enableTracking": "true", "enableUserBehaviorTracking": "true"})"framer-motion";;react"framer - motion",lucide-react";&apos;&apos;
export const BlockchainWeb3Dashboard = ("props": "any) => {&apos"}&apos;
    const;const {trackEvent} = useAnalytics({"enableTracking": "true",";
        "enableUserBehaviorTracking": "true"})";&apos;&apos;
    const [activeTab, setActiveTab] = useState(&apos;overview&apos);&apos;";
export const BlockchainWeb3Dashboard = ("props": "any) => {""";
"""}";
    const {trackEvent} = useAnalytics({"enableTracking": "true",;
"enableUserBehaviorTracking": "true"})";
export const BlockchainWeb3Dashboard = ("props": "any) => {const [activeTab", setActiveTab] = useState("overview")}
    const [nftForm, setNftForm] = useState({}";
";
"";
        "name": ","";
        "description": ","";
        "image": "});
'
''
'''
        name: '','''
        description: '','''
        image: ''
    }
    );
    const [transactionForm, setTransactionForm] = useState({}
'
''
'''
        to: '','''
        value: '','''
        data: ''
    }
    );
const handleConnectWallet = useCallback(async () => {}
        try: {},
            await: connectWallet()",","
            trackEvent("blockchain",dashboard",wallet_connected")}"
        catch: (error) {}"
            // comment
export const BlockchainWeb3Dashboard = (props: any) => {"
    const { trackEvent } = useAnalytics();""""""""
export const BlockchainWeb3Dashboard = (props: any) => {const { trackEvent } = useAnalytics({enableTracking: true, enableUserBehaviorTracking: true})";"""""""
export const BlockchainWeb3Dashboard = memo(({className = ""}) => {
    const { trackEvent } = useAnalytics({enableTracking: true, enableUserBehaviorTracking: true})"framer-motion";react"framer - motion",lucide-react";&apos;&apos
export const BlockchainWeb3Dashboard = (props: any) => {&apos}&apos
    const;const {trackEvent} = useAnalytics({enableTracking: true,"
        enableUserBehaviorTracking: true})";&apos;&apos
    const [activeTab, setActiveTab] = useState(&apos;overview&apos);&apos;"
export const BlockchainWeb3Dashboard = (props: any) => {"""
""}"
    const {trackEvent} = useAnalytics({enableTracking: true,
enableUserBehaviorTracking: true})"
export const BlockchainWeb3Dashboard = (props: any) => {const [activeTab, setActiveTab] = useState("overview")}
    const [nftForm, setNftForm] = useState({}"
"
""
        name: ",""
        description: ",""
        image: "})
}
    const [transactionForm, setTransactionForm] = useState({}";
        "to": ","";
        "value": ","";
        "data": "});
}
&apos;
&apos;&apos;
        "name": "&apos",&apos,&apos;&apos;
        "description": "&apos",&apos,&apos;&apos;
        "image": "&apos",&apos})&apos;&apos;
        "to": "&apos",&apos,&apos;&apos;
        "value": "&apos",&apos,&apos;&apos;
        "data": "&apos",&apos})&apos;&apos    const handleConnectWallet = useCallback(async () => {}
;
        try {}
;
            await connectWallet();
}
            trackEvent(&apos;blockchain&apos,dashboard&apos,wallet_connected&apos)}
;
        catch (error) {}";
            // comment;
            // comment;
    }, [connectWallet, trackEvent]);&apos;&apos    const handleMintNFT = useCallback(async () => {}
;
        if(nftForm.name.trim() && wallet) {}
;
                const;const;const metadata = {}
;
  "name": "nftForm.name",;
                    "description": "nftForm.description",";
  "image": "nftForm.image || "http","s": "// comment;
"""&apos","}"&apos;&apos}";
                await mintNFT(contracts[1]?.address || &apos;&apos, metadata)";
                setNftForm({name : "&apos",&apos, "description": "&apos",&apos, "image": "&apos",&apos})",;
                setShowMintNFT(false);
}
                trackEvent(&apos;blockchain&apos,dashboard&apos,nft_minted&apos)}
;
                // comment;
";"";
""";"";
        "name": "", """;"";
        "description": "", """;"";
        "image": ""})";
        "to": "", """;"";
        "value": "", """;"";
        "data": ""})";
            await connectWallet()";"";
            trackEvent("blockchain", dashboard",wallet_connected")}";
            // comment;
    }, [connectWallet, trackEvent]);
}
                const metadata = {}
;
  "name": "nftForm.nam",e,;
                    "description": "nftForm.descriptio",n,";
  "image": "nftForm."image": || ""https":// comment;
""""""}"""}";";";
                await : "mintNFT(contracts[1]?.address || """, metadata)",,;
                setNftForm({"name": ",", "description": ",", "image": ""})";";
                setShowMintNFT(false)";";";
                trackEvent("blockchain",dashboard",nft_minted")}";";
                // comment;
    }, [nftForm, wallet, contracts, mintNFT, trackEvent]);
}
    const handleSendTransaction = useCallback(async () => {}
;
        if(transactionForm.to.trim() && transactionForm.value && wallet) {},;
                "await": "sendTransaction(transactionForm.to", transactionForm.value, transactionForm.data || null)",,;
                setTransactionForm({"to": ",", "value": ",", "data": ""})";";
                setShowSendTransaction(false)";";
                trackEvent("blockchain",dashboard",transaction_sent")}";";
                // comment;
    }, [transactionForm, wallet, sendTransaction, trackEvent]);
}
    const getStatusColor = ("props": "any) => {"}
;
        "switch": "(status) {"},;
            "case": "confirmed": "return": "text-green-600 bg-green-100",,",;
            "case": "pending": "return": "text-yellow-600 bg-yellow-100",,,";
"case": "failed": "return": "text-red-600 bg-red-100",",";
            "default": "return": "text-gray-600 bg-gray-100,"}"}"";";"";
    "return": "(<div className="{"bg-white" "dark": bg-gray-"900": rounded-lg shadow-lg border border-gray-200 "dark":border-gray-"700": ${classNam",e}"}>"""{/* comment */}""""";";";
      <"div": "className="flex items-center justify-between p-4 border-b border-gray-200 "dark": border-gray-700">"""""",";";
        <"div": "className = "flex items-center space-x-3">"""""",",";
          <"div": "className="p-2 bg-blue-100 "dark": bg-blue-"900": rounded-lg">"""""",";";
            <Wallet : "className = "w-16 h-16 text-gray-400 mx-auto mb-4"  />"""""",",";
                  <"h3": "className = "text - lg font-medium text-gray-900 "dark": text-"white": mb-2">"",",;
                    "Connect": "Your Wallet""""",,",;
                  </h3>""""",",";
                  <"p": "className="text - gray-500 "dark": text-gray-"400": mb-6">"",",;
                    "Connect": "your Web3 wallet to start using blockchain features""""",,",;
                  </p>""""",",";
                  <"button": "onClick="{handleConnectWallet"}" disabled="{isConnecting}" className="px - 6 py-3 text-white bg-blue-600 rounded-lg "hover": "bg-blue-"700": "disabled":opacity-50">"{"isConnecting": ? "Connecting..." : ""Connect": Wallet","}"""",,;
                  </button>""""";";";
                </div>) : "(<"div": className = "space-y-6">"""""",",";
                  <"div": "className="bg-gray-50 "dark": bg-gray-"800": p-6 rounded-lg">"""""",";";
                    <"h3": "className="text-lg font-semibold text-gray-900 "dark": text-"white": mb-4">Wallet Information</h3>"""""",";";
                    <"div": "className = "grid grid - cols-1 "md": grid-cols-"2": gap-4">""""",",;
                      <div>""""",";
                        <"label": "className = "block text - sm font-medium text-gray-700 "dark": text-gray-"300": mb-1">"",",;
                          Address"""",;
                        </label>""""";";";
                        <"div": "className = "flex items-center space-x-2">"""""",",";
                          <"code": "className = "px - 3 py-2 bg-gray-100 "dark": bg-gray-"700": rounded text-sm font-mono">""," {wallet.address}"""",,;
                          </code>""""";";";
                          <"button": "onClick="{()" => navigator.clipboard.writeText(wallet.address)"} className="p-2 text-gray-500 "hover": "text-gray-"700": "dark":text-gray-"400": "dark":"hover":text-gray-200">"""""",";";
                            <Download : "className="w-4 h-4"  />"",,;
                          </button>;
                        </div>";
                      """",,",;
                          Balance"""",",";
                        <"p": "className = "text-2xl font-bold text-gray-900 "dark": text-white">""," {wallet.balance} "ETH": "</p>"",;
                          Network"""",",";
                        <"p": "className = "text - lg text-gray-900 "dark": text-white">{wallet.networ",k}</p>",,;
                          "Chain": "ID""""",",";
                        <"p": "className = "text - lg text-gray-900 "dark": text-white">{wallet.chainI",d}</p>",,;
                  </div>""";";
""""";";";
                    <"h3": "className="text-lg font-semibold text-gray-900 "dark": text-"white": mb-4">Quick Actions</h3>"""""",";";
                    <"div": "className="grid grid-cols-1 "md": grid-cols-"2": gap-4">"""""",";";
                      <"button": "onClick="{()" => setShowSendTransaction(true)"} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg "hover": "bg-green-700">"""""",";";
                        <Send : "className="w-5 h-5"  />"",,;
                        <span>"Send": "Transaction</span>"",;
                      </button>""",",";
                      <"button": "onClick="{()" => setShowMintNFT(true)"} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg "hover": "bg-purple-700">"""""",";";
                        <Plus : "className="w-5 h-5"  />"",",;
                        <span>"Mint": "NFT</span>",;
"name": "nftForm.name",;
"description": "nftForm.description",";
"image": "nftForm.image || ""https":// comment;
""""""}""}";
                await mintNFT(contracts[1]?.address || ", metadata)",;
                setNftForm({"name": ", "description": ", "image": "});
    const getStatusColor = (props: any) => {}
        switch: (status) {},
            case: "confirmed": return: "text-green-600 bg-green-100",,",
            case: "pending": return: "text-yellow-600 bg-yellow-100",,,"
case: "failed": return: "text-red-600 bg-red-100",","
            default: return: "text-gray-600 bg-gray-100,"}"}"";";""
    return: (<div className="{"bg-white" dark: bg-gray-900: rounded-lg shadow-lg border border-gray-200 dark:border-gray-700: ${classNam,e}"}>"""{/* comment */}""""";";"
      <div: className="flex items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700">""""",";"
        <div: className = "flex items-center space-x-3">""""",","
          <div: className="p-2 bg-blue-100 dark: bg-blue-900: rounded-lg">""""",";"
            <Wallet : className = "w-16 h-16 text-gray-400 mx-auto mb-4"  />""""",","
                  <h3: className = "text - lg font-medium text-gray-900 dark: text-white: mb-2">",",
                    Connect: Your Wallet"""",,",
                  """"",","
                  <p: className="text - gray-500 dark: text-gray-400: mb-6">",",
                    Connect: your Web3 wallet to start using blockchain features"""",,",
                  </p>""""",","
                  <button: onClick="{handleConnectWallet}" disabled="{isConnecting}" className="px - 6 py-3 text-white bg-blue-600 rounded-lg hover: bg-blue-700: disabled:opacity-50">"{isConnecting: ? "Connecting..." : "Connect: Wallet,"}"""",,
                  </button>""""";";"
                </div>) : (<div: className = "space-y-6">""""",","
                  <div: className="bg-gray-50 dark: bg-gray-800: p-6 rounded-lg">""""",";"
                    <h3: className="text-lg font-semibold text-gray-900 dark: text-white: mb-4">Wallet Information""""",";"
                    <div: className = "grid grid - cols-1 md: grid-cols-2: gap-4">"""",",
                      <div>""""","
                        <label: className = "block text - sm font-medium text-gray-700 dark: text-gray-300: mb-1">",",
                          Address"""",
                        </label>""""";";"
                        <div: className = "flex items-center space-x-2">""""",","
                          <code: className = "px - 3 py-2 bg-gray-100 dark: bg-gray-700: rounded text-sm font-mono">"," {wallet.address}"""",,
                          </code>""""";";"
                          <button: onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="p-2 text-gray-500 hover: text-gray-700: dark:text-gray-400: dark:hover:text-gray-200">""""",";"
                            <Download : className="w-4 h-4"  />",,
                          </button>
                        </div>"
                      """",,",
                          Balance"""",","
                        <p: className = "text-2xl font-bold text-gray-900 dark: text-white">"," {wallet.balance} ETH: </p>",
                          Network"""",","
                        <p: className = "text - lg text-gray-900 dark: text-white">{wallet.networ,k}</p>",,
                          Chain: ID"""",","
                        <p: className = "text - lg text-gray-900 dark: text-white">{wallet.chainI,d}</p>",,
                  </div>""";"
""""";";"
                    <h3: className="text-lg font-semibold text-gray-900 dark: text-white: mb-4">Quick Actions""""",";"
                    <div: className="grid grid-cols-1 md: grid-cols-2: gap-4">""""",";"
                      <button: onClick="{()" => setShowSendTransaction(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700">""""",";"
                        <Send : className="w-5 h-5"  />",,
                        <span>Send: Transaction</span>",
                      </button>""",","
                      <button: onClick="{()" => setShowMintNFT(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700">""""",";"
                        <Plus : className="w-5 h-5"  />",",
                        <span>Mint: NFT</span>,
name: nftForm.name,
description: nftForm.description,"
image: nftForm.image || "https:// comment
"""""}""}"
                await mintNFT(contracts[1]?.address || ", metadata)",
                setNftForm({name: ", description: ", image: "})
}
  "name": "nftForm.name", "description": "nftForm.description",";
"""""}"""}";"";
                await mintNFT(contracts[1]?.address || "", metadata)",;
                setNftForm({"name": "", "description": "", "image": ""})";"";
                trackEvent("blockchain", dashboard",nft_minted")}";
                // comment;
    }, [nftForm, wallet, contracts, mintNFT, trackEvent]);&apos;&apos;
        if(transactionForm.to.trim() && transactionForm.value && wallet) {}";
                await sendTransaction(transactionForm.to, transactionForm.value, transactionForm.data || null)",;
                setTransactionForm({"to": ", "value": ", "data": "});
}
                setTransactionForm({"to": "&apos",&apos, "value": "&apos",&apos, "data": "&apos",&apos})";
                setShowSendTransaction(false);
}
                trackEvent(&apos;blockchain&apos,dashboard&apos,transaction_sent&apos)}";
                // comment;
                // comment;
                await sendTransaction(transactionForm.to, transactionForm.value, transactionForm.data || null)",";
                setTransactionForm({"to": "", "value": "", "data": ""})";
                setShowSendTransaction(false)";"";
                trackEvent("blockchain", dashboard",transaction_sent")}";
                // comment;
    }, [transactionForm, wallet, sendTransaction, trackEvent]) ;&apos;&apos    const getStatusColor = ("props": "any) => {"}
;
        switch (status) {}
;
            case &apos;confirmed&apos;: "return &apos;text - green-600 bg-green-100"",;
            case &apos;pending&apos;: "return &apos;text - yellow-600 bg-yellow-100"",;
            case &apos;failed&apos;: "return &apos;text-red-600 bg-red-100;
            "default": return &apos",text-gray-600 bg-gray-100&apos}"}"";
    return (&apos;&apos;<div className="{"bg-white" "dark": "bg-gray-900 rounded-lg shadow-lg border border-gray-200 dar","k": "border-gray-700 ${className"}"}>&apos;&apos,{/* comment */}&apos;&apos,&apos;&apos,";
      <div className="&apos;flex" items-center justify-between p-4 border-b border-gray-200 "dark": "border-gray-700&apos",>"&apos,&apos,&apos;&apos;";
        <div className="&apos;flex" items-center space-x-3&apos;>"&apos;&apos,&apos;&apos;";
          <div className="&apos;p-2" bg-blue-100 "dark": "bg-blue-900 rounded-lg&apos",>"&apos,&apos,&apos;&apos;";
            <Wallet className="&apos;w-16" h-16 text-gray-400 mx-auto mb-4&apos;        />&apos;&apos,&apos;&apos,";
                  <h3 className="&apos;text-lg" font-medium text-gray-900 "dark": "text-white mb-2&apos",>";
                    Connect Your Wallet&apos,&apos,&apos;&apos,",;
                  </h3>&apos;&apos,&apos;&apos,";
                  <p className="&apos,text-gray-500" dar,"k": "text-gray-400 mb-6&apos",>";
                    Connect your Web3 wallet to start using blockchain features&apos,&apos,&apos;&apos,",;
                  </p>&apos;&apos,&apos,&apos,";
                  <button onClick="{handleConnectWallet}" disabled="{isConnecting}" className="&apos;px-6" py-3 text-white bg-blue-600 rounded-lg "hover": "bg-blue-700 disable","d": "opacity-50&apos",>&apos {isConnecting ? &apos,Connecting...&apos, : "&apos",Connect Wallet&apos}"&apos;&apos,"";
                  </button>&apos;&apos,&apos;&apos,";
                </div>) : "(<div className="&apos;space-y-6&apos;">"&apos;&apos",&apos;&apos;";
                  <div className="&apos;bg-gray-50" "dark": "bg-gray-800 p-6 rounded-lg&apos",>"&apos,&apos,&apos;&apos;";
                    <h3 className="&apos;text-lg" font-semibold text-gray-900 "dark": "text-white mb-4&apos;>Wallet Information&apos",</h3>&apos,&apos,&apos;&apos,";
                    <div className="&apos;grid" grid-cols-1 "md": "grid-cols-2 gap-4&apos",>"&apos,&apos,"";
                      <div>&apos;&apos,&apos;&apos,";
                        <label className="&apos;block" text-sm font-medium text-gray-700 "dark": "text-gray-300 mb-1&apos",>";
                          Address&apos,&apos,&apos;&apos,;
                        </label>&apos;&apos,&apos;&apos,",;
                        <div className="&apos;flex" items-center space-x-2&apos;>"&apos;&apos,&apos;&apos,";
                          <code className = "&apos,px-3" py-2 bg-gray-100 dar,"k": "bg-gray-700 rounded text-sm font-mono&apos",>;
                            {wallet.address}&apos;&apos,&apos;&apos,;
                          </code>&apos;&apos,&apos;&apos,";
                          <button onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="&apos;p-2" text-gray-500 "hover": "text-gray-700 "dark":text-gray-400 "dark":"hover":text-gray-200&apos",>"&apos,&apos,&apos;&apos;";
                            <Download className="&apos;w-4" h-4&apos;        />&apos,;
                      &apos;&apos,&apos;&apos,",;
                          Balance&apos;&apos,&apos;&apos,";
                        <p className = "&apos,text-2xl" font-bold text-gray-900 dar,"k": "text-white&apos",>;
                          {wallet.balance} ETH&apos;
                        </p>";
                          Network&apos;&apos,&apos;&apos;";
                        <p className="&apos;text-lg" text-gray-900 dar,"k": "text-white&apos",>{wallet.network}&apos;</p>";
                          Chain ID&apos;&apos,&apos;&apos;";
                        <p className="&apos;text-lg" text-gray-900 dar,"k": "text-white&apos",>{wallet.chainId}&apos;</p>;
                  <;</div>&apos;&apos,;
&apos;&apos,&apos;&apos,";
                    <h3 className="&apos;text-lg" font-semibold text-gray-900 "dark": "text-white mb-4&apos;>Quick Actions&apos",</h3>&apos,&apos,&apos,&apos,";
                    <div className="&apos,grid" grid-cols-1 m,"d": "grid-cols-2 gap-4&apos",>"&apos,&apos,"&apos,&apos,";
                      <button onClick="{()" => setShowSendTransaction(true)} className="&apos;flex" items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg "hover": "bg-green-700&apos",>"&apos,&apos,&apos;&apos;";
                        <Send className="&apos;w-5" h-5&apos;        />&apos,;
                        <span>Send Transaction</span>,;
                      </button>&apos,&apos,";
                      <button onClick="{()" => setShowMintNFT(true)} className="&apos;flex" items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg "hover": "bg-purple-700&apos",>"&apos,&apos,&apos;&apos;";
                        <Plus className="&apos;w-5" h-5&apos;        />&apos,;
            case "confirmed": "return "text-green-600 bg-green-100"",",;
            case "pending": "return "text-yellow-600 bg-yellow-100"",";
            case "failed": "return "text-red-600 bg-red-100"";
            case "failed": return "text-red-600 bg-red-100"",;
            "default": "return "text-gray-600 bg-gray-100""}"}";
    return (";
    <div className="{"bg-white" "dark": "bg-gray-900 rounded-lg shadow-lg border border-gray-200 "dark":border-gray-700 ${className"}"}>""{/* comment */}"";";
      <div className="flex items-center justify-between p-4 border-b border-gray-200 "dark": "border-gray-700">"";";
        <div className="flex items-center space-x-3">"";";
          <div className="p-2 bg-blue-100 "dark":bg-blue-900 rounded-lg">""",";
            <Wallet className="w-16 h-16 text-gray-400 mx-auto mb-4"   />"",";
                  <h3 className="text - lg font-medium text-gray-900 "dark": "text-white mb-2">",;
                    Connect Your Wallet"",;
                  </h3>"";";
                  <p className="text-gray-500 "dark": "text-gray-400 mb-6">",",;
                    Connect your Web3 wallet to start using blockchain features"",";
                  </p>"",";
                  <button onClick="{handleConnectWallet}" disabled="{isConnecting}" className="px-6 py-3 text-white bg-blue-600 rounded-lg "hover": "bg-blue-700 "disabled":opacity-50">"{isConnecting ? "Connecting..."  : "Connect Wallet""}"",;
                  </button>"";";
                </div>) : "(<div className="space-y-6">"";";
                  <div className="bg-gray-50 "dark": bg-gray-800 p-6 rounded-lg">""",";
                    <h3 className="text-lg font-semibold text-gray-900 "dark": "text-white mb-4">Wallet Information</h3>""",";
                    <div className="grid grid - cols-1 "md": "grid-cols-2 gap-4">""",;
                      <div>"";";
                        <label className="block text-sm font-medium text-gray-700 "dark": "text-gray-300 mb-1">",;
                          Address"",",;
                        </label>"",";
                        <div className = "flex items-center space-x-2">"",";
                          <code className="px - 3 py-2 bg-gray-100 "dark": "bg-gray-700 rounded text-sm font-mono"> {wallet.address"}"",;
                          </code>"";";
                          <button onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="p-2 text-gray-500 "hover": "text-gray-700 "dark":text-gray-400 "dark":"hover":text-gray-200">""",";
                            <Download className="w-4 h-4"   />,;
                          </button>,,;
                        </div>,";
                          Balance"",";
                        <p className="text-2xl font-bold text-gray-900 "dark": "text-white"> {wallet.balance"} ETH;
                        </p>;
                          Network"";";
                        <p className="text - lg text-gray-900 "dark": "text-white">{wallet.network"}</p>,;
                          Chain ID"";";
                        <p className="text - lg text-gray-900 "dark": "text-white">{wallet.chainId"}</p>,;
                  </div>"";";
                    <h3 className = "text-lg font-semibold text-gray-900 "dark": "text-white mb-4">Quick Actions</h3>""",";
                      <button onClick="{()" => setShowSendTransaction(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg "hover": "bg-green-700">""",",;
                        <Send className = "w-5 h-5"   />,;
                        <span>Send Transaction</span>,";
                      <button onClick="{()" => setShowMintNFT(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg "hover": "bg-purple-700">""",",;
                        <Plus className = "w-5 h-5"   />,;
                        <span>Mint NFT</span>,;
            case &apos;confirmed&apos;: return &apos;text - green-600 bg-green-100",
            case &apos;pending&apos;: return &apos;text - yellow-600 bg-yellow-100",
            case &apos;failed&apos;: return &apos;text-red-600 bg-red-100
            default: return &apos,text-gray-600 bg-gray-100&apos}"}""
    return (&apos;&apos;<div className="{"bg-white" dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dar,k:border-gray-700 ${className}"}>&apos;&apos,{/* comment */}&apos;&apos,&apos;&apos,"
      <div className="&apos;flex" items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700&apos,>"&apos,&apos,&apos;&apos;"
        <div className="&apos;flex" items-center space-x-3&apos;>"&apos;&apos,&apos;&apos;"
          <div className="&apos;p-2" bg-blue-100 dark: bg-blue-900 rounded-lg&apos,>"&apos,&apos,&apos;&apos;"
            <Wallet className="&apos;w-16" h-16 text-gray-400 mx-auto mb-4&apos;        />&apos;&apos,&apos;&apos,"
                  <h3 className="&apos;text-lg" font-medium text-gray-900 dark: text-white mb-2&apos,>"
                    Connect Your Wallet&apos,&apos,&apos;&apos,",
                  &apos;&apos,&apos;&apos,"
                  <p className="&apos,text-gray-500" dar,k: text-gray-400 mb-6&apos,>"
                    Connect your Web3 wallet to start using blockchain features&apos,&apos,&apos;&apos,",
                  </p>&apos;&apos,&apos,&apos,"
                  <button onClick="{handleConnectWallet}" disabled="{isConnecting}" className="&apos;px-6" py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disable,d: opacity-50&apos,>&apos {isConnecting ? &apos,Connecting...&apos, : &apos,Connect Wallet&apos}"&apos;&apos,""
                  </button>&apos;&apos,&apos;&apos,"
                </div>) : (<div className="&apos;space-y-6&apos;">"&apos;&apos,&apos;&apos;"
                  <div className="&apos;bg-gray-50" dark: bg-gray-800 p-6 rounded-lg&apos,>"&apos,&apos,&apos;&apos;"
                    <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white mb-4&apos;>Wallet Information&apos,&apos,&apos,&apos;&apos,"
                    <div className="&apos;grid" grid-cols-1 md: grid-cols-2 gap-4&apos,>"&apos,&apos,""
                      <div>&apos;&apos,&apos;&apos,"
                        <label className="&apos;block" text-sm font-medium text-gray-700 dark: text-gray-300 mb-1&apos,>"
                          Address&apos,&apos,&apos;&apos,
                        </label>&apos;&apos,&apos;&apos,",
                        <div className="&apos;flex" items-center space-x-2&apos;>"&apos;&apos,&apos;&apos,"
                          <code className = "&apos,px-3" py-2 bg-gray-100 dar,k: bg-gray-700 rounded text-sm font-mono&apos,>
                            {wallet.address}&apos;&apos,&apos;&apos,
                          </code>&apos;&apos,&apos;&apos,"
                          <button onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="&apos;p-2" text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200&apos,>"&apos,&apos,&apos;&apos;"
                            <Download className="&apos;w-4" h-4&apos;        />&apos,
                      &apos;&apos,&apos;&apos,",
                          Balance&apos;&apos,&apos;&apos,"
                        <p className = "&apos,text-2xl" font-bold text-gray-900 dar,k: text-white&apos,>
                          {wallet.balance} ETH&apos
                        </p>"
                          Network&apos;&apos,&apos;&apos;"
                        <p className="&apos;text-lg" text-gray-900 dar,k: text-white&apos,>{wallet.network}&apos;</p>"
                          Chain ID&apos;&apos,&apos;&apos;"
                        <p className="&apos;text-lg" text-gray-900 dar,k: text-white&apos,>{wallet.chainId}&apos;</p>
                  <;</div>&apos;&apos,
&apos;&apos,&apos;&apos,"
                    <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white mb-4&apos;>Quick Actions&apos,&apos,&apos,&apos,&apos,"
                    <div className="&apos,grid" grid-cols-1 m,d: grid-cols-2 gap-4&apos,>"&apos,&apos,"&apos,&apos,"
                      <button onClick="{()" => setShowSendTransaction(true)} className="&apos;flex" items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700&apos,>"&apos,&apos,&apos;&apos;"
                        <Send className="&apos;w-5" h-5&apos;        />&apos,
                        <span>Send Transaction</span>,
                      </button>&apos,&apos,"
                      <button onClick="{()" => setShowMintNFT(true)} className="&apos;flex" items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700&apos,>"&apos,&apos,&apos;&apos;"
                        <Plus className="&apos;w-5" h-5&apos;        />&apos,
            case "confirmed": return "text-green-600 bg-green-100",",
            case "pending": return "text-yellow-600 bg-yellow-100","
            case "failed": return "text-red-600 bg-red-100""
            case "failed": return "text-red-600 bg-red-100",
            default: return "text-gray-600 bg-gray-100"}"}"
    return ("
    <div className="{"bg-white" dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}"}>""{/* comment */}"";"
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700">"";"
        <div className="flex items-center space-x-3">"";"
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">"","
            <Wallet className="w-16 h-16 text-gray-400 mx-auto mb-4"   />"","
                  <h3 className="text - lg font-medium text-gray-900 dark:text-white mb-2">,
                    Connect Your Wallet"",
                  "";"
                  <p className="text-gray-500 dark:text-gray-400 mb-6">,",
                    Connect your Web3 wallet to start using blockchain features"","
                  </p>"","
                  <button onClick="{handleConnectWallet}" disabled="{isConnecting}" className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50">"{isConnecting ? "Connecting..."  : "Connect Wallet"}"",
                  </button>"";"
                </div>) : (<div className="space-y-6">"";"
                  <div className="bg-gray-50 dark: bg-gray-800 p-6 rounded-lg">"","
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Wallet Information"","
                    <div className="grid grid - cols-1 md:grid-cols-2 gap-4">"",
                      <div>"";"
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">,
                          Address"",",
                        </label>"","
                        <div className = "flex items-center space-x-2">"","
                          <code className="px - 3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono"> {wallet.address}"",
                          </code>"";"
                          <button onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="p-2 text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">"","
                            <Download className="w-4 h-4"   />,
                          </button>,,
                        </div>,"
                          Balance"","
                        <p className="text-2xl font-bold text-gray-900 dark:text-white"> {wallet.balance} ETH
                        </p>
                          Network"";"
                        <p className="text - lg text-gray-900 dark:text-white">{wallet.network}</p>,
                          Chain ID"";"
                        <p className="text - lg text-gray-900 dark:text-white">{wallet.chainId}</p>,
                  </div>"";"
                    <h3 className = "text-lg font-semibold text-gray-900 dark: text-white mb-4">Quick Actions"","
                      <button onClick="{()" => setShowSendTransaction(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700">"",",
                        <Send className = "w-5 h-5"   />,
                        <span>Send Transaction</span>,"
                      <button onClick="{()" => setShowMintNFT(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700">"",",
                        <Plus className = "w-5 h-5"   />,
                        <span>Mint NFT</span>,
                </div>)}
;
            </motion.div>)}"";
"""{activeTab = == "contracts" && (<motion.div key="contracts" initial = {}
;
  {"opacity": "0",";
"default": "return "text-gray-600 bg-gray-100""}"}";
    return (";
    <div className="{"bg-white" "dark": "bg-gray-900 rounded-lg shadow-lg border border-gray-200 "dark":border-gray-700 ${className"}"}>"""{/* comment */}""""";
      <div className="flex items-center justify-between p-4 border-b border-gray-200 "dark": "border-gray-700">"""";
        <div className="flex items-center space-x-3">"""";
          <div className="p-2 bg-blue-100 "dark":bg-blue-900 rounded-lg">"""";
            <Wallet className = "w-16 h-16 text-gray-400 mx-auto mb-4"   />"""";
                  <h3 className="text-lg font-medium text-gray-900 "dark":text-white mb-2">";
                    Connect Your Wallet""""";
                  </h3>"""";
                  <p className="text-gray-500 "dark":text-gray-400 mb-6">";
                    Connect your Web3 wallet to start using blockchain features""""";
                  </p>""""",;
                  <button onClick="{handleConnectWallet}" disabled="{isConnecting}" className="px-6 py-3 text-white bg-blue-600 rounded-lg "hover": "bg-blue-700 "disabled":opacity-50">"{isConnecting ? "Connecting..." : "Connect Wallet""}"""";
                  </button>"""";
                </div>) : "(<div className="space-y-6">"""";
                  <div className="bg-gray-50 "dark": bg-gray-800 p-6 rounded-lg">"""";
                    <h3 className="text-lg font-semibold text-gray-900 "dark":text-white mb-4">Wallet Information</h3>"""";
                    <div className="grid grid-cols-1 "md":grid-cols-2 gap-4">""""";
                      <div>"""";
                        <label className="block text-sm font-medium text-gray-700 "dark":text-gray-300 mb-1">";
                          Address""""";
                        </label>"""";
                        <div className="flex items-center space-x-2">"""";
                          <code className="px-3 py-2 bg-gray-100 "dark":bg-gray-700 rounded text-sm font-mono">"",;
                            {wallet.address}""""";
                          </code>"""";
                          <button onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="p-2 text-gray-500 "hover": "text-gray-700 "dark":text-gray-400 "dark":"hover":text-gray-200">"""";
                            <Download className="w-4 h-4"   />";
                      """"";
                          Balance"""";
                        <p className="text-2xl font-bold text-gray-900 "dark":text-white">",;
                          {wallet.balance} ETH,";
Network"""";
                        <p className="text-lg text-gray-900 "dark": "text-white">{wallet.network"}</p>";
                          Chain ID"""";
                        <p className="text-lg text-gray-900 "dark": "text-white">{wallet.chainId"}</p>";
                  </div>"""";
                  <div className="bg-gray-50 "dark": "bg-gray-800 p-6 rounded-lg">"""";
                    <h3 className="text-lg font-semibold text-gray-900 "dark":text-white mb-4">Quick Actions</h3>""""",;
                      <button onClick="{()" => setShowSendTransaction(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg "hover": "bg-green-700">"""";
                        <Send className="w-5 h-5"   />"",;
                      <button onClick="{()" => setShowMintNFT(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg "hover": "bg-purple-700">""""",;
                        <Plus className="w-5 h-5"   />,;
                        <span>Mint NFT</span>",,;
            </motion.div>)}""""";";
""""""{"activeTab": "=== "contracts" && (<motion.div key = "contracts" initial = {"}", {"opacity": ",0",;
  "y": "2",0}} "animate": "= {"}
;
  {"opacity": ",1>;
  "y":  ",0}} "exit": "= {"}
;
  {"opacity": ",0",";
  "y": "-"20": """",",";";
""""}} className="space - y-4">""""",";
              <"div": "className = "flex items-center justify-between">"""""",",";
                <"h3": "className="text-lg font-semibold text-gray-900 "dark": text-white">"Smart": Contracts</h3>"",                <"button": "onClick = {"}
;
  {opacity: 0,"
default: return "text-gray-600 bg-gray-100"}"}"
    return ("
    <div className="{"bg-white" dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}"}>"""{/* comment */}"""""
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700">""""
        <div className="flex items-center space-x-3">""""
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">""""
            <Wallet className = "w-16 h-16 text-gray-400 mx-auto mb-4"   />""""
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">"
                    Connect Your Wallet"""""
                  """"
                  <p className="text-gray-500 dark:text-gray-400 mb-6">"
                    Connect your Web3 wallet to start using blockchain features"""""
                  </p>"""",
                  <button onClick="{handleConnectWallet}" disabled="{isConnecting}" className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50">"{isConnecting ? "Connecting..." : "Connect Wallet"}""""
                  </button>""""
                </div>) : (<div className="space-y-6">""""
                  <div className="bg-gray-50 dark: bg-gray-800 p-6 rounded-lg">""""
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Wallet Information""""
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">"""""
                      <div>""""
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">"
                          Address"""""
                        </label>""""
                        <div className="flex items-center space-x-2">""""
                          <code className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">",
                            {wallet.address}"""""
                          </code>""""
                          <button onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="p-2 text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">""""
                            <Download className="w-4 h-4"   />"
                      """""
                          Balance""""
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">,
                          {wallet.balance} ETH,"
Network""""
                        <p className="text-lg text-gray-900 dark:text-white">{wallet.network}</p>"
                          Chain ID""""
                        <p className="text-lg text-gray-900 dark:text-white">{wallet.chainId}</p>"
                  </div>""""
                  <div className="bg-gray-50 dark: bg-gray-800 p-6 rounded-lg">""""
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions"""",
                      <button onClick="{()" => setShowSendTransaction(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700">""""
                        <Send className="w-5 h-5"   />",
                      <button onClick="{()" => setShowMintNFT(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700">"""",
                        <Plus className="w-5 h-5"   />,
                        <span>Mint NFT</span>",,
            </motion.div>)}""""";"
""""""{activeTab: === "contracts" && (<motion.div key = "contracts" initial = {}", {opacity:  ,0,
  y: 2,0}} animate: = {}
  {opacity:  ,1>
  y:  ,0}} exit: = {}
  {opacity:  ,0,"
  y: -20: """,",";"
""""}} className="space - y-4">""""","
              <div: className = "flex items-center justify-between">""""",","
                <h3: className="text-lg font-semibold text-gray-900 dark: text-white">Smart: Contracts",                <button: onClick = {}
  () => addContract({}
;
                "name": ""New": "Contract",",";";
                "address": "0x" + Math.random().toString(36).substr(,2, 40),";";
                "network": "ethereum,",";";
                abi[],";";
                functions["function1",function2"],";";
                events["Event1","Event2"],";
""""})} className="px-"3": "py-2 text-sm font-medium text-white bg-blue-600 rounded-lg "hover": bg-blue-700">"",""",";";
                  <Plus : "className = "w-4 h-4 inline mr-2"  />"",",;
                  "Add": "Contract"",,;
              <"div": "className="grid grid-cols-1 "md": grid-cols-"2": "lg":grid-cols-"3": gap-4">""""{contracts.map((contract) => (<div key="{contract.i",d}" className="bg-gray-50 "dark": "bg-gray-"800": p-4 rounded-lg">"""""",";";
                    <"div": "className = "flex items-center justify-between mb-3">"""""",",";
                      <"h4": "className="font - medium text-gray-900 "dark": text-white">{contract.nam",e}</h4>""""",";
                      <"span": "className = "px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">""," {contract.network}
;
                      </span>";
                    <"div": "className="space-y-2 text-sm">"""""",",";
                        <"span": "className="text-gray-500 "dark": text-gray-400">"Address":</span>"""""",";";
                        <"code": "className = "text-xs font-mono">""," {contract.address.slice(0, 8)}...{contract.address.slice(-6)}
;
                        </code>";
                        <"span": "className="text-gray-500 "dark": text-gray-400">"Functions":</span>"""""",";";
                        <"span": "className="text - gray-900 "dark": text-white">{contract.functions.lengt",h}</span>",";
                        <"span": "className="text-gray-500 "dark": text-gray-400">"Events":</span>"""""",";";
                        <"span": "className="text - gray-900 "dark": text-white">{contract.events.lengt",h}</span>",";
                        <"span": "className="text-gray-500 "dark": text-gray-400">"Last": "Used":</span>"""""",";";
                        <"span": "className="text - gray-900 "dark": text-white">"",",;
            </motion.div>)}&apos;&apos,&apos;";
"&apos;&apos,&apos;&apos {activeTab === &apos;contracts&apos; && (&apos}&apos;<motion.div key="&apos;contracts&apos;" initial = {}
;
  {"opacity": "0",;
  "y": "20"}} animate = {}
;
  {"opacity": "1>;
"y": 0"}} exit = {}";
  "y": "-20 """,">;
""}} className="space-y-4">"";";
              <div className="flex items-center justify-between">"";";
                <h3 className = "text-lg font-semibold text-gray-900 "dark": "text-white">Smart Contracts</h3>",;
                <button onClick = {}>;
                "name": "New Contract",";
                "address": "0x" + Math.random().toString(36).substr(2, 40),";
                "network": "ethereum"",;
                abi[],";
                functions["function1",function2"],";
                events["Event1","Event2"];";
""})} className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg "hover": "bg-blue-700">"",",;
                  <Plus className = "w-4 h-4 inline mr-2"   />,;
                  Add Contract,";
              <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-4">""{contracts.map((contract) => (<div key="{contract.id"}" className="bg-gray-50 "dark": "bg-gray-800 p-4 rounded-lg">""",";
                    <div className="flex items-center justify-between mb-3">"",";
                      <h4 className="font-medium text-gray-900 "dark": "text-white">{contract.name"}</h4>"";";
  {opacity: 0,
  y: 20}} animate = {}
  {opacity: 1>
y: 0}} exit = {}"
  y: -20 "",">
""}} className="space-y-4">"";"
              <div className="flex items-center justify-between">"";"
                <h3 className = "text-lg font-semibold text-gray-900 dark: text-white">Smart Contracts,
                <button onClick = {}>
                name: "New Contract","
                address: "0x" + Math.random().toString(36).substr(2, 40),"
                network: "ethereum"",
                abi[],"
                functions["function1",function2"],"
                events["Event1","Event2"];"
""})} className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700">",",
                  <Plus className = "w-4 h-4 inline mr-2"   />,
                  Add Contract,"
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">""{contracts.map((contract) => (<div key="{contract.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">"","
                    <div className="flex items-center justify-between mb-3">"","
                      <h4 className="font-medium text-gray-900 dark:text-white">{contract.name}</h4>"";"
                      <span className = "px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"> {contract.network}
;
                      </span>;";
                    <div className="space-y-2 text-sm">"";";
                        <span className = "text-gray-500 "dark": "text-gray-400">"Address":</span>""",";
                        <code className="text-xs font-mono"> {contract.address.slice(0, 8)}...{contract.address.slice(-6)}
;
                        </code>;";
                        <span className = "text-gray-500 "dark": "text-gray-400">"Functions":</span>""",";
                        <span className="text-gray-900 "dark": "text-white">{contract.functions.length"}</span>;";
                        <span className = "text-gray-500 "dark": "text-gray-400">"Events":</span>""",";
                        <span className="text-gray-900 "dark": "text-white">{contract.events.length"}</span>;";
                        <span className = "text-gray-500 "dark": "text-gray-400">Last "Used":</span>""",";
                        <span className="text-gray-900 "dark": "text-white"> {contract.lastInteraction.toLocaleDateString()"}
;
                  </div>) ) }";
"""{activeTab === "nfts" && (<motion.div key="nfts" initial = {}
;
  { "opacity": "0", { "opacity": "0",>;
  "y": "-20 &apos",&apos,",;
&apos,&apos,"&apos}} className="&apos;space-y-4&apos;">"&apos;&apos,&apos;&apos;";
              <div className="&apos;flex" items-center justify-between&apos;>"&apos;&apos,&apos;&apos;";
                <h3 className="&apos;text - lg" font-semibold text-gray-900 "dark": "text-white&apos",>Smart Contracts&apos,</h3>";
                "name": "&apos",New Contract&apos,",;
                "address": "&apos",0x&apos, + Math.random().toString(36).substr(2, 40),;
                "network": "&apos",ethereum&apos,";
                abi[],";&apos;&apos,;
                functions[&apos;&apos,function1&apos,&apos,function2&apos],;
                events[&apos;Event1&apos,&apos;Event2&apos];";
&apos;&apos,&apos})} className="&apos;px-3" py-2 text-sm font-medium text-white bg-blue-600 rounded-lg "hover": "bg-blue-700&apos;>"",&apos,&apos,";
                  <Plus className="&apos;w-4" h-4 inline mr-2&apos;        />;
                  Add Contract&apos,,;
              </div>&apos;&apos,";
              <div className="&apos,grid" grid-cols-1 "md": "grid-cols-2 l","g": "grid-cols-3 gap-4&apos",>"&apos,&apos,"{contracts.map((contract) => (&apos}&apos;<div key="{contract.id}" className="&apos;bg-gray-50" "dark": "bg-gray-800 p-4 rounded-lg&apos",>"&apos,&apos,&apos;&apos,",;
                    <div className="&apos;flex" items-center justify-between mb-3&apos;>"&apos;&apos,&apos;&apos,";
                      <h4 className="&apos,font-medium" text-gray-900 dar,"k": "text-white&apos",>{contract.name}&apos;</h4>&apos;&apos,&apos;&apos,";
                      <span className="&apos;px-2" py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full&apos;>;
                        {contract.network}&apos;";
                    <div className="&apos;space-y-2" text-sm&apos;>"&apos;&apos,&apos;&apos;";
                        <span className="&apos;text-gray-500" "dark": "text-gray-400&apos",>Addres,"s": "&apos",</span>&apos,&apos,&apos;&apos,",;
                        <code className = "&apos,text-xs" font-mono&apos,>;
                          {contract.address.slice(0, 8)}...{contract.address.slice(-6)}&apos;";
                        <span className="&apos;text-gray-500" "dark": "text-gray-400&apos;>"Functions":&apos",</span>&apos,&apos,&apos,&apos,"";
                        <span className = "&apos,text-gray-900" dar,"k": "text-white&apos",>{contract.&apos}functions.length}</span>";
                        <span className="&apos;text-gray-500" "dark": "text-gray-400&apos;>"Events":&apos",</span>&apos,&apos,&apos,&apos,";
                        <span className="&apos,text-gray-900" dar,"k": "text-white&apos",>{contract.events.length}&apos;</span>";
                        <span className="&apos;text-gray-500" "dark": "text-gray-400&apos;>Last "Used":&apos",</span>&apos,&apos,&apos,&apos,"";
                        <span className = "&apos,text-gray-900" dar,"k": "text-white&apos",>;
                          {contract.lastInteraction.toLocaleDateString()}&apos,;
            </motion.div>)}""""";
""""""{activeTab = == "contracts" && (<motion.div key="contracts" initial = {}
;
  {"opacity": "0", "y": "20"}} animate = {}
;
  { "opacity": "1",";
  { "opacity": "0", "y": "-20 """",";
""""}} className="space-y-4">"""";
              <div className="flex items-center justify-between">"""";
                <h3 className="text-lg font-semibold text-gray-900 "dark": "text-white">Smart Contracts</h3>",;
"name": "New Contract", ";"";
                "address": "0x" + Math.random().toString(36).substr(2, 40), ";"";
                "network": "ethereum", abi[], ";"";
                functions["function1", function2"], ";
                events["Event1", "Event2"];";
""""})} className = "px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg "hover": "bg-blue-700">"""";
                  <Plus className="w-4 h-4 inline mr-2"   />;
                  Add Contract"",;
              <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-4">""""{contracts.map((contract) => (<div key="{contract.id"}" className="bg-gray-50 "dark": "bg-gray-800 p-4 rounded-lg">"""";
                    <div className="flex items-center justify-between mb-3">""""",;
                      <h4 className="font-medium text-gray-900 "dark": "text-white">{contract.name"}</h4>"""";
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">;
                        {contract.network}";
                    <div className="space-y-2 text-sm">"""";
                        <span className="text-gray-500 "dark": "text-gray-400">"Address":</span>"""";
                        <code className="text-xs font-mono">",;
                          {contract.address.slice(0, 8)}...{contract.address.slice(-6)}";
                        <span className="text-gray-500 "dark": "text-gray-400">"Functions":</span>""""",;
                        <span className="text-gray-900 "dark": "text-white">{contract.functions.length"}</span>";
                        <span className="text-gray-500 "dark": "text-gray-400">"Events":</span>""""",;
                        <span className="text-gray-900 "dark": "text-white">{contract.events.length"}</span>";
                        <span className="text-gray-500 "dark": "text-gray-400">Last "Used":</span>"""";
                        <span className="text-gray-900 "dark":text-white">",;
                          {contract.lastInteraction.toLocaleDateString()}
;
""""""{"activeTab": "=== "nfts" && (<motion.div key = "nfts" initial = {"}", { "opacity": ",0",";
                <"h3": "className="text-lg font-semibold text-gray-900 "dark": text-white">"NFT": Collection</h3>"""""",";";
                <"button": "onClick="{()" => setShowMintNFT(true)"} className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg "hover": "bg-purple-700">"""""",;
                  "Mint": "NFT"",;
              <"div": "className="grid grid-cols-1 "md": grid-cols-"2": "lg":grid-cols-"3": gap-4">""""{nfts.map((nft) => (<div key="{nft.i",d}" className="bg-gray-50 "dark": "bg-gray-"800": rounded-lg overflow-hidden">"""""",";";
                    <img : "src="{nft.image"}" alt="{nft.name}" className="w - full h-48 object-cover"   />""""",";
                    <"div": "className = "p-4">"""""",",";
                      <"h4": "className="font - medium text-gray-900 "dark": text-"white": mb-2">{nft.nam",e}</h4>""""",";
                      <"p": "className="text - sm text-gray-600 "dark": text-gray-"400": mb-3">{nft.descriptio",n}</p>""",";
                          <"span": "className="text-gray-500 "dark": text-gray-400">"Token": "ID":</span>"""""",";";
                          <"span": "className="text - gray-900 "dark": text-white">{nft.tokenI",d}</span>",";
                          <"span": "className="text-gray-500 "dark": text-gray-400">"Owner":</span>"""""",";";
                          <"code": "className = "text-xs font-mono">""," {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}";
                          <"span": "className="text-gray-500 "dark": text-gray-400">"Mint": "Date":</span>"""""",";";
                          <"span": "className = "text-gray-900 "dark": text-white">""," {nft.mintDate.toLocaleDateString()}
;
                        </div>"""";";";
                        """"{nft."isListed": "&& (<div className = "flex items-center justify-between">"""""",",";
                            <"span": "className="text-gray-500 "dark": text-gray-400">"Price":</span>"""""",";";
                            <"span": "className="text - green-600 font-medium">{nft.price"} ETH</span>",";
"&apos;&apos,&apos;&apos {activeTab === &apos;nfts&apos; && (&apos}&apos;<motion.div key="&apos;nfts&apos;" initial = {}";
                <h3 className="text-lg font-semibold text-gray-900 "dark": "text-white">NFT Collection</h3>""",";
                <button onClick="{()" => setShowMintNFT(true)} className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg "hover": "bg-purple-700">""",;
                  Mint NFT,";
              <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-4">""{nfts.map((nft) => (<div key="{nft.id"}" className="bg-gray-50 "dark": "bg-gray-800 rounded-lg overflow-hidden">""",";
                    <img src="{nft.image}" alt="{nft.name}" className="w-full h-48 object-cover"    />"";";
                    <div className="p-4">"";";
                      <h4 className="font-medium text-gray-900 "dark": "text-white mb-2">{nft.name"}</h4>"";";
                      <p className="text-sm text-gray-600 "dark": "text-gray-400 mb-3">{nft.description"}</p>"";";
                          <span className = "text-gray-500 "dark": "text-gray-400">Token "ID":</span>""",";
                          <span className="text-gray-900 "dark": "text-white">{nft.tokenId"}</span>;";
                          <span className = "text-gray-500 "dark": "text-gray-400">"Owner":</span>""",";
                          <code className="text-xs font-mono"> {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}";
                          <span className="text-gray-500 "dark": "text-gray-400">Mint "Date":</span>""",";
                          <span className="text-gray-900 "dark": "text-white"> {nft.mintDate.toLocaleDateString()"}";
                        ""{nft.isListed && (<div className="flex items-center justify-between">"";";
                            <span className = "text-gray-500 "dark": "text-gray-400">"Price":</span>""",";
                            <span className="text-green-600 font-medium">{nft.price} ETH</span> { "opacity": "0",";
                <h3 className="&apos;text-lg" font-semibold text-gray-900 "dark": "text-white&apos;>NFT Collection&apos",</h3>&apos,&apos,"&apos,&apos,";
                <button onClick="{()" => setShowMintNFT(true)} className="&apos;px-3" py-2 text-sm font-medium text-white bg-purple-600 rounded-lg "hover": "bg-purple-700&apos",>"&apos,&apos,&apos;&apos,,;
                  Mint NFT&apos,";
              <div className="&apos,grid" grid-cols-1 "md": "grid-cols-2 l","g": "grid-cols-3 gap-4&apos",>"&apos,&apos,"{nfts.map((nft) => (&apos}&apos;<div key="{nft.id}" className="&apos;bg-gray-50" "dark": "bg-gray-800 rounded-lg overflow-hidden&apos",>"&apos,&apos,"&apos,&apos,";
                    <img src="{nft.image}" alt="{nft.name}" className="&apos;w-full" h-48 object-cover&apos;         />&apos;&apos,&apos;&apos,";
                    <div className="&apos;p-4&apos;">"&apos;&apos,&apos;&apos;";
                      <h4 className="&apos;font-medium" text-gray-900 "dark": "text-white mb-2&apos",>{nft.name}&apos;</h4>&apos;&apos,&apos;&apos,";
                      <p className="&apos;text-sm" text-gray-600 "dark": "text-gray-400 mb-3&apos",>{nft.description}&apos;</p>&apos;&apos;";
                          <span className="&apos;text-gray-500" "dark": "text-gray-400&apos;>Token "ID":&apos",</span>&apos,&apos,&apos,&apos,";
                          <span className="&apos,text-gray-900" dar,"k": "text-white&apos",>{nft.tokenId}&apos;</span>";
                          <span className="&apos;text-gray-500" "dark": "text-gray-400&apos",>Owne,"r": "&apos",</span>&apos,&apos,"&apos,&apos,";
                            {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}&apos;";
                          <span className="&apos;text-gray-500" "dark": "text-gray-400&apos;>Mint "Date":&apos",</span>&apos,&apos,"&apos,&apos,";
                            {nft.mintDate.toLocaleDateString()}&apos,;
                        </div>&apos;&apos,";
                        &apos;&apos,&apos {nft.isListed && (&apos}&apos;<div className="&apos;flex" items-center justify-between&apos;>"&apos;&apos,&apos;&apos;";
                            <span className="&apos;text-gray-500" "dark": "text-gray-400&apos",>Pric,"e": "&apos",</span>&apos,&apos,&apos;&apos,",;
                            <span className="&apos,text-green-600" font-medium&apos,>{nft.price} ETH&apos;</span>";
""""""{activeTab = == "nfts" && (<motion.div key="nfts" initial = {}";
                <h3 className="text-lg font-semibold text-gray-900 "dark": "text-white">NFT Collection</h3>""""",;
                <button onClick="{()" => setShowMintNFT(true)} className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg "hover": "bg-purple-700">"""";
                  Mint NFT"",;
              <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-4">""""{nfts.map((nft) => (<div key="{nft.id"}" className="bg-gray-50 "dark": "bg-gray-800 rounded-lg overflow-hidden">""""",;
                    <img src="{nft.image}" alt="{nft.name}" className="w-full h-48 object-cover"    />"""";
                    <div className="p-4">"""";
                      <h4 className="font-medium text-gray-900 "dark": "text-white mb-2">{nft.name"}</h4>"""";
                      <p className="text-sm text-gray-600 "dark": "text-gray-400 mb-3">{nft.description"}</p>"""";
                          <span className="text-gray-500 "dark": "text-gray-400">Token "ID":</span>""""",;
                          <span className="text-gray-900 "dark": "text-white">{nft.tokenId"}</span>";
                          <span className="text-gray-500 "dark": "text-gray-400">"Owner":</span>""""",;
                            {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}";
                          <span className="text-gray-500 "dark": "text-gray-400">Mint "Date":</span>""""",;
                            {nft.mintDate.toLocaleDateString()}";
                        """"{nft.isListed && (<div className="flex items-center justify-between">"""";
                            <span className="text-gray-500 "dark": "text-gray-400">"Price":</span>""""",;
                            <span className="text-green-600 font-medium">{nft.price} ETH</span>";
"""{activeTab === "defi" && (<motion.div key="defi" initial = {}>;
""""""{"activeTab": "=== "defi" && (<motion.div key = "defi" initial = {"}", { "opacity": ",0",";
                <"h3": "className="text-lg font-semibold text-gray-900 "dark": text-white">"DeFi": Positions</h3>"",;
  () => createDeFiPosition({}";
                type "staking,",";";
                "protocol": ""Zion": "Protocol",",";";
                "asset": "ZION,",";";
                "amount": "1000,",";";
                "apy": "12.",5,";";
  "rewards": "125",",";";
""""})} className="px-"3": "py-2 text-sm font-medium text-white bg-green-600 rounded-lg "hover": bg-green-700">"""""",;
                  "Add": "Position"",;
              <"div": "className="grid grid-cols-1 "md": grid-cols-"2": "lg":grid-cols-"3": gap-4">""""{defiPositions.map((position) => (<div key="{position.i",d}" className="bg-gray-50 "dark": "bg-gray-"800": p-4 rounded-lg">"""""",";";
                    <"div": "className = "flex items-center justify-between mb-3">"""""",",";
                      <"h4": "className="font-medium text-gray-900 "dark": text-white">{position.protoco",l}</h4>""""";";";
                      <"span": "className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type === "staking" ? "bg-green-100 text-green-800" :""""",",">;
                    position.type == = "liquidity" ? "bg-blue-100 text-blue-800" :"""",,",";
                        "bg-purple-"100": "text-purple-800""}"}>{position.type}";";";
                    <"div": "className = "space-y-3">"""""",",";
                        <"span": "className="text-gray-500 "dark": text-gray-400">"Asset":</span>"""""",";";
                        <"span": "className="font - medium text-gray-900 "dark": text-white">{position.asse",t}</span>",";
                        <"span": "className="text-gray-500 "dark": text-gray-400">"Amount":</span>"""""",";";
                        <"span": "className="font - medium text-gray-900 "dark": text-white">{position.amoun",t}</span>",";
                        <"span": "className="text-gray-500 "dark": text-gray-400">"APY":</span>"""""",";";
                        <"span": "className="text - green-600 font-medium">{position.apy"}%</span>",";
                        <"span": "className="text-gray-500 "dark": text-gray-400">"Rewards":</span>"""""",";";
                        <"span": "className="text - orange-600 font-medium">{position.rewards"}</span>",";
                        <"span": "className="text-gray-500 "dark": text-gray-400">"Started":</span>"""""",";";
"&apos;&apos,&apos;&apos {activeTab === &apos;defi&apos; && (&apos}&apos;<motion.div key="&apos;defi&apos;" initial = {}";
                <h3 className="text-lg font-semibold text-gray-900 "dark": "text-white">DeFi Positions</h3>",;
                type "staking",";
                "protocol": "Zion Protocol",";
                "asset": "ZION",";
                "amount": "1000", {"opacity": "0",";
                <h3 className="&apos;text - lg" font-semibold text-gray-900 "dark": "text-white&apos",>DeFi Positions&apos,</h3>";
                type &apos,staking&apos,",;
                "protocol": "&apos",Zion Protocol&apos,";
                "asset": "&apos",ZION&apos,;
                "amount": "&apos",1000&apos,";
                "apy": "12.5",";
  "rewards": "&apos",125",",;
&apos,&apos,"&apos})} className="&apos;px-3" py-2 text-sm font-medium text-white bg-green-600 rounded-lg "hover": "bg-green-700&apos",>"&apos,&apos,&apos;&apos,,;
                  Add Position&apos,";
              <div className="&apos,grid" grid-cols-1 "md": "grid-cols-2 l","g": "grid-cols-3 gap-4&apos",>"&apos,&apos,"{defiPositions.map((position) => (&apos}&apos;<div key="{position.id}" className="&apos;bg-gray-50" "dark": "bg-gray-800 p-4 rounded-lg&apos",>"&apos,&apos,&apos;&apos,",;
                    <div className="&apos;flex" items-center justify-between mb-3&apos;>"&apos;&apos;"&apos;&apos,";
                      <h4 className="&apos,font-medium" text-gray-900 dar,"k": "text-white&apos",>{position.protocol}&apos;</h4>&apos;"&apos;"&apos;&apos;";
                      <span className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type === &apos;staking&apos; ? &apos;bg-green-100 text-green-800&apos; : "&apos;&apos;";
                    position.type === &apos;liquidity&apos; ? &apos;bg-blue-100 text-blue-800&apos; :&apos;"&apos;">;
                        &apos;bg-purple-100 text-purple-800&apos"}"}>{position.type}&apos;&apos;";
                    <div className="&apos;space-y-3&apos;">"&apos;&apos,&apos;&apos;";
                        <span className="&apos;text-gray-500" "dark": "text-gray-400&apos;>"Asset":&apos",</span>&apos,&apos,&apos,&apos,";
                        <span className="&apos,font-medium" text-gray-900 dar,"k": "text-white&apos",>{position.asset}&apos;</span>";
                        <span className="&apos;text-gray-500" "dark": "text-gray-400&apos;>"Amount":&apos",</span>&apos,&apos,&apos,&apos,"";
                        <span className="&apos,font-medium" text-gray-900 dar,"k": "text-white&apos",>{position.amount}&apos;</span>";
                        <span className="&apos;text-gray-500" "dark": "text-gray-400&apos",>AP,"Y": "&apos",</span>&apos,&apos,&apos;&apos,",;
                        <span className="&apos,text-green-600" font-medium&apos,>{position.apy}%&apos;</span>";
                        <span className="&apos;text-gray-500" "dark": "text-gray-400&apos",>Reward,"s": "&apos",</span>&apos,&apos,&apos;&apos,"",;
                        <span className="&apos,text-orange-600" font-medium&apos,>{position.rewards}&apos;</span>";
                        <span className="&apos;text-gray-500" "dark": "text-gray-400&apos;>"Started":&apos",</span>&apos,&apos,"&apos,&apos,";
                          {position.startDate.toLocaleDateString()}&apos,;
""""""{activeTab = == "defi" && (<motion.div key="defi" initial = {}";
                <h3 className="text - lg font-semibold text-gray-900 "dark": "text-white">DeFi Positions</h3>"",,;
                type "staking", ",";
                "protocol": "Zion Protocol", ",";
                "asset": "ZION", ";"";
                "amount": "1000", "apy": "12.5",";"";
  "rewards": "125",";
""})} className = "px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg "hover": "bg-green-700">""",;
                  Add Position,";
              <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-4">""{defiPositions.map((position) => (<div key="{position.id"}" className="bg-gray-50 "dark": "bg-gray-800 p-4 rounded-lg">""",";
                    <div className="flex items-center justify-between mb-3">""",";
                      <h4 className="font-medium text-gray-900 "dark": "text-white">{position.protocol"}</h4>"""";";
                      <span className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type == = "staking" ? "bg-green-100 text-green-800" :"",;
                    position.type == = "liquidity" ? "bg-blue-100 text-blue-800" :"""">;
                        "bg-purple-100 text-purple-800"}"}>{position.type}";
                    <div className="space-y-3">"";";
                        <span className = "text-gray-500 "dark": "text-gray-400">"Asset":</span>""",";
                        <span className="font-medium text-gray-900 "dark": "text-white">{position.asset"}</span>;";
                        <span className = "text-gray-500 "dark": "text-gray-400">"Amount":</span>""",";
                        <span className="font-medium text-gray-900 "dark": "text-white">{position.amount"}</span>;";
                        <span className = "text-gray-500 "dark": "text-gray-400">"APY":</span>""",";
                        <span className="text-green-600 font-medium">{position.apy}%</span>;";
                        <span className = "text-gray-500 "dark": "text-gray-400">"Rewards":</span>""",";
                        <span className="text-orange-600 font-medium">{position.rewards}</span>;";
                        <span className = "text-gray-500 "dark": "text-gray-400">"Started":</span>""",";
                        <span className="text-gray-900 "dark": "text-white"> {position.startDate.toLocaleDateString()"}";
"""{activeTab === "transactions" && (<motion.div key="transactions" initial = {}";
""""})} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg "hover": "bg-green-700">"""";
                  Add Position"",;
              <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-3 gap-4">""""{defiPositions.map((position) => (<div key="{position.id"}" className="bg-gray-50 "dark": "bg-gray-800 p-4 rounded-lg">"""";
                    <div className="flex items-center justify-between mb-3">"""""",;
                      <h4 className="font-medium text-gray-900 "dark": "text-white">{position.protocol"}</h4>""""";
                      <span className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type === "staking" ? "bg-green-100 text-green-800" :"""";
                    <div className="space-y-3">"""";
                        <span className="text-gray-500 "dark": "text-gray-400">"Asset":</span>""""",;
                        <span className="font-medium text-gray-900 "dark": "text-white">{position.asset"}</span>";
                        <span className="text-gray-500 "dark": "text-gray-400">"Amount":</span>""""",;
                        <span className="font-medium text-gray-900 "dark": "text-white">{position.amount"}</span>";
                        <span className="text-gray-500 "dark": "text-gray-400">"APY":</span>""""",;
                        <span className="text-green-600 font-medium">{position.apy}%</span>";
                        <span className="text-gray-500 "dark": "text-gray-400">"Rewards":</span>""""",;
                        <span className="text-orange-600 font-medium">{position.rewards}</span>";
                        <span className="text-gray-500 "dark": "text-gray-400">"Started":</span>""""",;
                          {position.startDate.toLocaleDateString()}
;
""""""{"activeTab": "=== "transactions" && (<motion.div key = "transactions" initial = {"}", { "opacity": ",0",";
                <"h3": "className="text-lg font-semibold text-gray-900 "dark": text-white">"Transaction": History</h3>"""""",";";
                <"button": "onClick="{()" => setShowSendTransaction(true)"} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg "hover": "bg-green-700">"""""",";";
                  <Send : "className = "w-4 h-4 inline mr-2"  />"",",;
                  "Send": "Transaction"",,;
              <"div": "className="space-y-3">""""{transactions.map((tx) => (<div key="{tx.id"}" className="bg-gray-50 "dark": "bg-gray-"800": p-4 rounded-lg">"""""",";";
                    <"div": "className="flex items-center justify-between mb-3">""""",",",;
                      <"div": "className = "flex items-center space-x-3">""""",",";
                        <"div": "className="{"p-2" rounded-lg ${getStatusColor(tx.status)"}"}>""""";";";
                          <Coins : "className = "w-4 h-4"  />"",",";
                          <"p": "className="font - medium text-gray-900 "dark": text-white">""," {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction"""",";
                          <"p": "className="text-sm text-gray-500 "dark": text-gray-400">"",;
                            "Hash": "{tx.hash.slice(",0, 8)}...{tx.hash.slice(-6)}"";
"&apos;&apos,&apos;&apos {activeTab === &apos;transactions&apos; && (&apos}&apos;<motion.div key="&apos;transactions&apos;" initial = {}";
                <h3 className="text-lg font-semibold text-gray-900 "dark": "text-white">Transaction History</h3>""",";
                <button onClick="{()" => setShowSendTransaction(true)} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg "hover": "bg-green-700">""",",;
                  <Send className = "w-4 h-4 inline mr-2"   />,;
                  Send Transaction,";
              <div className="space-y-3">""{transactions.map((tx) => (<div key="{tx.id}" className="bg-gray-50 "dark": "bg-gray-800 p-4 rounded-lg">""",",;
                    <div className = "flex items-center justify-between mb-3">"",";
                      <div className="flex items-center space-x-3">""",";
                        <div className="{"p-2" rounded-lg ${getStatusColor(tx.status)}"}>"";";
                          <Coins className="w-4 h-4"   />;";
                          <p className="font-medium text-gray-900 "dark": "text-white"> {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)"} Transaction"";";
                          <p className = "text-sm text-gray-500 "dark": "text-gray-400">",;
                            "Hash": "{tx.hash.slice(0", 8)}...{tx.hash.slice(-6)}";
                          </p>"";
                        </div>""";
                      </div>"""";";
                      <span className = "{"px-2" py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}"}> {tx.status}";
                    <div className="grid grid-cols-1 "md": "grid-cols-3 gap-4 text-sm">""",";
                        <span className="text-gray-500 "dark": "text-gray-400">"From":</span>""",";
                        <code className="block text-xs font-mono mt-1"> {tx.from.slice(0, 8)}...{tx.from.slice(-6)}";
                        <span className="text-gray-500 "dark": "text-gray-400">"To":</span>""",";
                        <code className="block text-xs font-mono mt-1"> {tx.to.slice(0, 8)}...{tx.to.slice(-6)}";
                        <span className="text-gray-500 "dark": "text-gray-400">"Value":</span>""",";
                        <p className="font-medium text-gray-900 "dark": "text-white mt-1">{tx.value"} ETH</p>;";
                    <div className = "mt-3 pt-3 border-t border-gray-200 "dark": "border-gray-600">""",";
                          <span className="text-gray-500 "dark": "text-gray-400">Gas "Used":</span>""",";
                          <p className="text-gray-900 "dark": "text-white">{tx.gasUsed"}</p>;";
                          <span className = "text-gray-500 "dark": "text-gray-400">Gas "Price":</span>""",";
                          <p className="text-gray-900 "dark": "text-white">{tx.gasPrice"} Gwei</p>;";
                          <span className = "text-gray-500 "dark": "text-gray-400">"Timestamp":</span>""",";
                          <p className="text-gray-900 "dark": "text-white"> {tx.timestamp.toLocaleString()"}
;
                    </div> { "opacity": "0",";
                <h3 className="&apos;text-lg" font-semibold text-gray-900 "dark": "text-white&apos;>Transaction History&apos",</h3>&apos,&apos,"&apos,&apos,";
                <button onClick="{()" => setShowSendTransaction(true)} className="&apos;px-3" py-2 text-sm font-medium text-white bg-green-600 rounded-lg "hover": "bg-green-700&apos",>"&apos,&apos,&apos;&apos;";
                  <Send className="&apos;w-4" h-4 inline mr-2&apos;        />;
                  Send Transaction&apos,",;
              <div className="&apos;space-y-3&apos;">"&apos,&apos,"{transactions.map((tx) => (&apos}&apos;<div key="{tx.id}" className="&apos;bg-gray-50" "dark": "bg-gray-800 p-4 rounded-lg&apos",>"&apos,&apos,&apos;&apos;";
                    <div className="&apos;flex" items-center justify-between mb-3&apos;>"&apos;"&apos,",;
                      <div className="&apos;flex" items-center space-x-3&apos;>"&apos,"&apos,"";
                        <div className="{"p-2" rounded-lg ${getStatusColor(tx.status)}"}>&apos;&apos,&apos;&apos,";
                          <Coins className="&apos;w-4" h-4&apos;        />&apos,;
                        </div>&apos;&apos,&apos;&apos;";
                          <p className="&apos;font-medium" text-gray-900 "dark": "text-white&apos",>";
                            {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction&apos;&apos,&apos;&apos;";
                          <p className="&apos;text-sm" text-gray-500 "dark": "text-gray-400&apos",>;
                            Has,"h": "{tx.hash.slice(0", 8)}...{tx.hash.slice(-6)}"&apos,;
""""""{activeTab = == "transactions" && (<motion.div key="transactions" initial = {}";
                <h3 className="text-lg font-semibold text-gray-900 "dark": "text-white">Transaction History</h3>""""",;
                <button onClick="{()" => setShowSendTransaction(true)} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg "hover": "bg-green-700">"""";
                  <Send className="w-4 h-4 inline mr-2"   />;
                  Send Transaction"",;
              <div className="space-y-3">""""{transactions.map((tx) => (<div key="{tx.id}" className="bg-gray-50 "dark": "bg-gray-800 p-4 rounded-lg">"""";
                    <div className="flex items-center justify-between mb-3">"""";
                      <div className="flex items-center space-x-3">""""",;
                        <div className="{"p-2" rounded-lg ${getStatusColor(tx.status)}"}>"""";
                          <Coins className="w-4 h-4"   />";
                          <p className="font-medium text-gray-900 "dark": "text-white">"",;
                            {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction"""";
                          <p className="text-sm text-gray-500 "dark": "text-gray-400">",;
"Hash": "{tx.hash.slice(0", 8)}...{tx.hash.slice(-6)}";
                          </p>"";
                        </div>""";
                      </div>""""";
                      <"span": "className="{"px-2" py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)"}"}>" {tx.status}";
                    <"div": "className="grid grid-cols-1 "md": grid-cols-"3": gap-4 text-sm">""""",";";
                        <"span": "className="text-gray-500 "dark": text-gray-400">"From":</span>"""""",";";
                        <"code": "className = "block text-xs font-mono mt-1">""," {tx.from.slice(0, 8)}...{tx.from.slice(-6)}";
                        <"span": "className="text-gray-500 "dark": text-gray-400">"To":</span>"""""",";";
                        <"code": "className = "block text-xs font-mono mt-1">""," {tx.to.slice(0, 8)}...{tx.to.slice(-6)}";
                        <"span": "className="text-gray-500 "dark": text-gray-400">"Value":</span>"""""",";";
                        <"p": "className="font - medium text-gray-900 "dark": text-"white": mt-1">{tx.valu",e} ETH</p>",";
                    <"div": "className="mt-3 pt-3 border-t border-gray-200 "dark": border-gray-600">"""""",";";
                          <"span": "className="text-gray-500 "dark": text-gray-400">"Gas": "Used":</span>"""""",";";
                          <"p": "className="text - gray-900 "dark": text-white">{tx.gasUse",d}</p>",";
                          <"span": "className="text-gray-500 "dark": text-gray-400">"Gas": "Price":</span>"""""",";";
                          <"p": "className="text - gray-900 "dark": text-white">{tx.gasPric",e} Gwei</p>",";
                          <"span": "className="text-gray-500 "dark": text-gray-400">"Timestamp":</span>"""""",";";
                          <"p": "className="text-gray-900 "dark": text-white">"",";";
                    <div className="&apos;grid" grid-cols-1 "md": "grid-cols-3 gap-4 text-sm&apos",>"&apos,&apos,"",;
                        <span className="&apos,text-gray-500" "dark": "text-gray-400&apos",>Fro,"m": "&apos",</span>&apos,&apos,&apos;&apos,"",;
                        <code className = "&apos,block" text-xs font-mono mt-1&apos,>;
                          {tx.from.slice(0, 8)}...{tx.from.slice(-6)}&apos;";
                        <span className="&apos;text-gray-500" "dark": "text-gray-400&apos",>T,"o": "&apos",</span>&apos,&apos,"&apos,&apos,";
                          {tx.to.slice(0, 8)}...{tx.to.slice(-6)}&apos;";
                        <span className="&apos;text-gray-500" "dark": "text-gray-400&apos;>"Value":&apos",</span>&apos,&apos,&apos,&apos,";
                        <p className="&apos,font-medium" text-gray-900 dar,"k": "text-white mt-1&apos",>{tx.value} ETH&apos;</p>";
                    <div className="&apos;mt-3" pt-3 border-t border-gray-200 "dark": "border-gray-600&apos",>"&apos,&apos,&apos;&apos,",;
                          <span className="&apos;text-gray-500" "dark": "text-gray-400&apos;>Gas "Used":&apos",</span>&apos,&apos,&apos,&apos,";
                          <p className="&apos,text-gray-900" dar,"k": "text-white&apos",>{tx.gasUsed}&apos;</p>";
                          <span className="&apos;text-gray-500" "dark": "text-gray-400&apos;>Gas "Price":&apos",</span>&apos,&apos,&apos,&apos,"";
                          <p className="&apos,text-gray-900" dar,"k": "text-white&apos",>{tx.gasPrice} Gwei&apos;</p>";
                          <span className="&apos;text-gray-500" "dark": "text-gray-400&apos;>"Timestamp":&apos",</span>&apos,&apos,&apos,&apos,";
                          <p className = "&apos,text-gray-900" dar,"k": "text-white&apos",>;
                            {tx.timestamp.toLocaleString()}&apos,;
                    </div>""";
                    <div className = "grid grid-cols-1 "md": "grid-cols-3 gap-4 text-sm">"""";
                        <span className="text-gray-500 "dark":text-gray-400">"From":</span>"""";
                        <code className="block text-xs font-mono mt-1">",;
                          {tx.from.slice(0, 8)}...{tx.from.slice(-6)}";
                        <span className="text-gray-500 "dark": "text-gray-400">"To":</span>""""",;
                          {tx.to.slice(0, 8)}...{tx.to.slice(-6)}";
                        <span className="text-gray-500 "dark": "text-gray-400">"Value":</span>""""",;
                        <p className="font-medium text-gray-900 "dark": "text-white mt-1">{tx.value"} ETH</p>";
                    <div className="mt-3 pt-3 border-t border-gray-200 "dark": "border-gray-600">"""";
                      <div className="grid grid-cols-1 "md":grid-cols-3 gap-4 text-sm">"""";
                          <span className="text-gray-500 "dark":text-gray-400">Gas "Used":</span>""""",;
                          <p className="text-gray-900 "dark": "text-white">{tx.gasUsed"}</p>";
                          <span className="text-gray-500 "dark": "text-gray-400">Gas "Price":</span>""""",;
                          <p className="text-gray-900 "dark": "text-white">{tx.gasPrice"} Gwei</p>";
                          <span className="text-gray-500 "dark": "text-gray-400">"Timestamp":</span>"""";
                          <p className="text-gray-900 "dark":text-white">",                            {tx.timestamp.toLocaleString()}
;
  { opacity: 0, { opacity: 0,>
  y: -20 &apos,&apos,",
&apos,&apos,"&apos}} className="&apos;space-y-4&apos;">"&apos;&apos,&apos;&apos;"
              <div className="&apos;flex" items-center justify-between&apos;>"&apos;&apos,&apos;&apos;"
                <h3 className="&apos;text - lg" font-semibold text-gray-900 dark: text-white&apos,>Smart Contracts&apos,"
                name: &apos,New Contract&apos,",
                address: &apos,0x&apos, + Math.random().toString(36).substr(2, 40),
                network: &apos,ethereum&apos,"
                abi[],";&apos;&apos,
                functions[&apos;&apos,function1&apos,&apos,function2&apos],
                events[&apos;Event1&apos,&apos;Event2&apos];"
&apos;&apos,&apos})} className="&apos;px-3" py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700&apos;>",&apos,&apos,"
                  <Plus className="&apos;w-4" h-4 inline mr-2&apos;        />
                  Add Contract&apos,,
              </div>&apos;&apos,"
              <div className="&apos,grid" grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-4&apos,>"&apos,&apos,"{contracts.map((contract) => (&apos}&apos;<div key="{contract.id}" className="&apos;bg-gray-50" dark: bg-gray-800 p-4 rounded-lg&apos,>"&apos,&apos,&apos;&apos,",
                    <div className="&apos;flex" items-center justify-between mb-3&apos;>"&apos;&apos,&apos;&apos,"
                      <h4 className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{contract.name}&apos;</h4>&apos;&apos,&apos;&apos,"
                      <span className="&apos;px-2" py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full&apos;>
                        {contract.network}&apos;"
                    <div className="&apos;space-y-2" text-sm&apos;>"&apos;&apos,&apos;&apos;"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Addres,s: &apos,</span>&apos,&apos,&apos;&apos,",
                        <code className = "&apos,text-xs" font-mono&apos,>
                          {contract.address.slice(0, 8)}...{contract.address.slice(-6)}&apos;"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Functions:&apos,</span>&apos,&apos,&apos,&apos,""
                        <span className = "&apos,text-gray-900" dar,k: text-white&apos,>{contract.&apos}functions.length}</span>"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Events:&apos,</span>&apos,&apos,&apos,&apos,"
                        <span className="&apos,text-gray-900" dar,k: text-white&apos,>{contract.events.length}&apos;</span>"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Last Used:&apos,</span>&apos,&apos,&apos,&apos,""
                        <span className = "&apos,text-gray-900" dar,k: text-white&apos,>
                          {contract.lastInteraction.toLocaleDateString()}&apos,
            </motion.div>)}"""""
""""""{activeTab = == "contracts" && (<motion.div key="contracts" initial = {}
  {opacity: 0, y: 20}} animate = {}
  { opacity: 1,"
  { opacity: 0, y: -20 ""","
""""}} className="space-y-4">""""
              <div className="flex items-center justify-between">""""
                <h3 className="text-lg font-semibold text-gray-900 dark: text-white">Smart Contracts,
name: "New Contract", ";""
                address: "0x" + Math.random().toString(36).substr(2, 40), ";""
                network: "ethereum", abi[], ";""
                functions["function1", function2"], "
                events["Event1", "Event2"];"
""""})} className = "px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700">""""
                  <Plus className="w-4 h-4 inline mr-2"   />
                  Add Contract",
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">""""{contracts.map((contract) => (<div key="{contract.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">""""
                    <div className="flex items-center justify-between mb-3">"""",
                      <h4 className="font-medium text-gray-900 dark:text-white">{contract.name}</h4>""""
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {contract.network}"
                    <div className="space-y-2 text-sm">""""
                        <span className="text-gray-500 dark: text-gray-400">Address:</span>""""
                        <code className="text-xs font-mono">,
                          {contract.address.slice(0, 8)}...{contract.address.slice(-6)}"
                        <span className="text-gray-500 dark: text-gray-400">Functions:</span>"""",
                        <span className="text-gray-900 dark:text-white">{contract.functions.length}</span>"
                        <span className="text-gray-500 dark: text-gray-400">Events:</span>"""",
                        <span className="text-gray-900 dark:text-white">{contract.events.length}</span>"
                        <span className="text-gray-500 dark: text-gray-400">Last Used:</span>""""
                        <span className="text-gray-900 dark:text-white">,
                          {contract.lastInteraction.toLocaleDateString()}
""""""{activeTab: === "nfts" && (<motion.div key = "nfts" initial = {}", { opacity:  ,0,"
                <h3: className="text-lg font-semibold text-gray-900 dark: text-white">NFT: Collection""""",";"
                <button: onClick="{()" => setShowMintNFT(true)} className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700">""""",
                  Mint: NFT",
              <div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-4">""""{nfts.map((nft) => (<div key="{nft.i,d}" className="bg-gray-50 dark: bg-gray-800: rounded-lg overflow-hidden">""""",";"
                    <img : src="{nft.image}" alt="{nft.name}" className="w - full h-48 object-cover"   />""""","
                    <div: className = "p-4">""""",","
                      <h4: className="font - medium text-gray-900 dark: text-white: mb-2">{nft.nam,e}</h4>""""","
                      <p: className="text - sm text-gray-600 dark: text-gray-400: mb-3">{nft.descriptio,n}</p>""","
                          <span: className="text-gray-500 dark: text-gray-400">Token: ID:</span>""""",";"
                          <span: className="text - gray-900 dark: text-white">{nft.tokenI,d}</span>","
                          <span: className="text-gray-500 dark: text-gray-400">Owner:</span>""""",";"
                          <code: className = "text-xs font-mono">"," {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}"
                          <span: className="text-gray-500 dark: text-gray-400">Mint: Date:</span>""""",";"
                          <span: className = "text-gray-900 dark: text-white">"," {nft.mintDate.toLocaleDateString()}
                        </div>"""";";"
                        """"{nft.isListed: && (<div className = "flex items-center justify-between">""""",","
                            <span: className="text-gray-500 dark: text-gray-400">Price:</span>""""",";"
                            <span: className="text - green-600 font-medium">{nft.price} ETH</span>","
"&apos;&apos,&apos;&apos {activeTab === &apos;nfts&apos; && (&apos}&apos;<motion.div key="&apos;nfts&apos;" initial = {}"
                <h3 className="text-lg font-semibold text-gray-900 dark: text-white">NFT Collection"","
                <button onClick="{()" => setShowMintNFT(true)} className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700">"",
                  Mint NFT,"
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">""{nfts.map((nft) => (<div key="{nft.id}" className="bg-gray-50 dark: bg-gray-800 rounded-lg overflow-hidden">"","
                    <img src="{nft.image}" alt="{nft.name}" className="w-full h-48 object-cover"    />"";"
                    <div className="p-4">"";"
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">{nft.name}</h4>"";"
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{nft.description}</p>"";"
                          <span className = "text-gray-500 dark: text-gray-400">Token ID:</span>"","
                          <span className="text-gray-900 dark:text-white">{nft.tokenId}</span>;"
                          <span className = "text-gray-500 dark: text-gray-400">Owner:</span>"","
                          <code className="text-xs font-mono"> {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}"
                          <span className="text-gray-500 dark: text-gray-400">Mint Date:</span>"","
                          <span className="text-gray-900 dark:text-white"> {nft.mintDate.toLocaleDateString()}"
                        ""{nft.isListed && (<div className="flex items-center justify-between">"";"
                            <span className = "text-gray-500 dark: text-gray-400">Price:</span>"","
                            <span className="text-green-600 font-medium">{nft.price} ETH</span> { opacity: 0,"
                <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white&apos;>NFT Collection&apos,&apos,&apos,"&apos,&apos,"
                <button onClick="{()" => setShowMintNFT(true)} className="&apos;px-3" py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700&apos,>"&apos,&apos,&apos;&apos,,
                  Mint NFT&apos,"
              <div className="&apos,grid" grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-4&apos,>"&apos,&apos,"{nfts.map((nft) => (&apos}&apos;<div key="{nft.id}" className="&apos;bg-gray-50" dark: bg-gray-800 rounded-lg overflow-hidden&apos,>"&apos,&apos,"&apos,&apos,"
                    <img src="{nft.image}" alt="{nft.name}" className="&apos;w-full" h-48 object-cover&apos;         />&apos;&apos,&apos;&apos,"
                    <div className="&apos;p-4&apos;">"&apos;&apos,&apos;&apos;"
                      <h4 className="&apos;font-medium" text-gray-900 dark: text-white mb-2&apos,>{nft.name}&apos;</h4>&apos;&apos,&apos;&apos,"
                      <p className="&apos;text-sm" text-gray-600 dark: text-gray-400 mb-3&apos,>{nft.description}&apos;</p>&apos;&apos;"
                          <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Token ID:&apos,</span>&apos,&apos,&apos,&apos,"
                          <span className="&apos,text-gray-900" dar,k: text-white&apos,>{nft.tokenId}&apos;</span>"
                          <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Owne,r: &apos,</span>&apos,&apos,"&apos,&apos,"
                            {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}&apos;"
                          <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Mint Date:&apos,</span>&apos,&apos,"&apos,&apos,"
                            {nft.mintDate.toLocaleDateString()}&apos,
                        </div>&apos;&apos,"
                        &apos;&apos,&apos {nft.isListed && (&apos}&apos;<div className="&apos;flex" items-center justify-between&apos;>"&apos;&apos,&apos;&apos;"
                            <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Pric,e: &apos,</span>&apos,&apos,&apos;&apos,",
                            <span className="&apos,text-green-600" font-medium&apos,>{nft.price} ETH&apos;</span>"
""""""{activeTab = == "nfts" && (<motion.div key="nfts" initial = {}"
                <h3 className="text-lg font-semibold text-gray-900 dark: text-white">NFT Collection"""",
                <button onClick="{()" => setShowMintNFT(true)} className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700">""""
                  Mint NFT",
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">""""{nfts.map((nft) => (<div key="{nft.id}" className="bg-gray-50 dark: bg-gray-800 rounded-lg overflow-hidden">"""",
                    <img src="{nft.image}" alt="{nft.name}" className="w-full h-48 object-cover"    />""""
                    <div className="p-4">""""
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">{nft.name}</h4>""""
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{nft.description}</p>""""
                          <span className="text-gray-500 dark: text-gray-400">Token ID:</span>"""",
                          <span className="text-gray-900 dark:text-white">{nft.tokenId}</span>"
                          <span className="text-gray-500 dark: text-gray-400">Owner:</span>"""",
                            {nft.owner.slice(0, 6)}...{nft.owner.slice(-4)}"
                          <span className="text-gray-500 dark: text-gray-400">Mint Date:</span>"""",
                            {nft.mintDate.toLocaleDateString()}"
                        """"{nft.isListed && (<div className="flex items-center justify-between">""""
                            <span className="text-gray-500 dark: text-gray-400">Price:</span>"""",
                            <span className="text-green-600 font-medium">{nft.price} ETH</span>"
"""{activeTab === "defi" && (<motion.div key="defi" initial = {}>
""""""{activeTab: === "defi" && (<motion.div key = "defi" initial = {}", { opacity:  ,0,"
                <h3: className="text-lg font-semibold text-gray-900 dark: text-white">DeFi: Positions",
  () => createDeFiPosition({}"
                type "staking,",";"
                protocol: "Zion: Protocol,",";"
                asset: "ZION,",";"
                amount: "1000,",";"
                apy: 12.,5,";"
  rewards: "125",",";"
""""})} className="px-3: py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">""""",
                  Add: Position",
              <div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-4">""""{defiPositions.map((position) => (<div key="{position.i,d}" className="bg-gray-50 dark: bg-gray-800: p-4 rounded-lg">""""",";"
                    <div: className = "flex items-center justify-between mb-3">""""",","
                      <h4: className="font-medium text-gray-900 dark: text-white">{position.protoco,l}</h4>""""";";"
                      <span: className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type === "staking" ? "bg-green-100 text-green-800" :"""",",">
                    position.type == = "liquidity" ? "bg-blue-100 text-blue-800" :"""",,","
                        "bg-purple-100: text-purple-800"}"}>{position.type}";";"
                    <div: className = "space-y-3">""""",","
                        <span: className="text-gray-500 dark: text-gray-400">Asset:</span>""""",";"
                        <span: className="font - medium text-gray-900 dark: text-white">{position.asse,t}</span>","
                        <span: className="text-gray-500 dark: text-gray-400">Amount:</span>""""",";"
                        <span: className="font - medium text-gray-900 dark: text-white">{position.amoun,t}</span>","
                        <span: className="text-gray-500 dark: text-gray-400">APY:</span>""""",";"
                        <span: className="text - green-600 font-medium">{position.apy}%</span>","
                        <span: className="text-gray-500 dark: text-gray-400">Rewards:</span>""""",";"
                        <span: className="text - orange-600 font-medium">{position.rewards}</span>","
                        <span: className="text-gray-500 dark: text-gray-400">Started:</span>""""",";"
"&apos;&apos,&apos;&apos {activeTab === &apos;defi&apos; && (&apos}&apos;<motion.div key="&apos;defi&apos;" initial = {}"
                <h3 className="text-lg font-semibold text-gray-900 dark: text-white">DeFi Positions,
                type "staking","
                protocol: "Zion Protocol","
                asset: "ZION","
                amount: "1000", {opacity: 0,"
                <h3 className="&apos;text - lg" font-semibold text-gray-900 dark: text-white&apos,>DeFi Positions&apos,"
                type &apos,staking&apos,",
                protocol: &apos,Zion Protocol&apos,"
                asset: &apos,ZION&apos,
                amount: &apos,1000&apos,"
                apy: 12.5,"
  rewards: &apos,125",",
&apos,&apos,"&apos})} className="&apos;px-3" py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&apos,>"&apos,&apos,&apos;&apos,,
                  Add Position&apos,"
              <div className="&apos,grid" grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-4&apos,>"&apos,&apos,"{defiPositions.map((position) => (&apos}&apos;<div key="{position.id}" className="&apos;bg-gray-50" dark: bg-gray-800 p-4 rounded-lg&apos,>"&apos,&apos,&apos;&apos,",
                    <div className="&apos;flex" items-center justify-between mb-3&apos;>"&apos;&apos;"&apos;&apos,"
                      <h4 className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{position.protocol}&apos;</h4>&apos;"&apos;"&apos;&apos;"
                      <span className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type === &apos;staking&apos; ? &apos;bg-green-100 text-green-800&apos; :&apos;&apos;"
                    position.type === &apos;liquidity&apos; ? &apos;bg-blue-100 text-blue-800&apos; :&apos;"&apos;">
                        &apos;bg-purple-100 text-purple-800&apos}"}>{position.type}&apos;&apos;"
                    <div className="&apos;space-y-3&apos;">"&apos;&apos,&apos;&apos;"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Asset:&apos,</span>&apos,&apos,&apos,&apos,"
                        <span className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{position.asset}&apos;</span>"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Amount:&apos,</span>&apos,&apos,&apos,&apos,""
                        <span className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{position.amount}&apos;</span>"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos,>AP,Y: &apos,</span>&apos,&apos,&apos;&apos,",
                        <span className="&apos,text-green-600" font-medium&apos,>{position.apy}%&apos;</span>"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Reward,s: &apos,</span>&apos,&apos,&apos;&apos,"",
                        <span className="&apos,text-orange-600" font-medium&apos,>{position.rewards}&apos;</span>"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Started:&apos,</span>&apos,&apos,"&apos,&apos,"
                          {position.startDate.toLocaleDateString()}&apos,
""""""{activeTab = == "defi" && (<motion.div key="defi" initial = {}"
                <h3 className="text - lg font-semibold text-gray-900 dark: text-white">DeFi Positions",,
                type "staking", ","
                protocol: "Zion Protocol", ","
                asset: "ZION", ";""
                amount: "1000", apy: 12.5,";""
  rewards: "125","
""})} className = "px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">"",
                  Add Position,"
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">""{defiPositions.map((position) => (<div key="{position.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">"","
                    <div className="flex items-center justify-between mb-3">""","
                      <h4 className="font-medium text-gray-900 dark:text-white">{position.protocol}</h4>"""";"
                      <span className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type == = "staking" ? "bg-green-100 text-green-800" :"",
                    position.type == = "liquidity" ? "bg-blue-100 text-blue-800" :"""">
                        "bg-purple-100 text-purple-800"}"}>{position.type}"
                    <div className="space-y-3">"";"
                        <span className = "text-gray-500 dark: text-gray-400">Asset:</span>"","
                        <span className="font-medium text-gray-900 dark:text-white">{position.asset}</span>;"
                        <span className = "text-gray-500 dark: text-gray-400">Amount:</span>"","
                        <span className="font-medium text-gray-900 dark:text-white">{position.amount}</span>;"
                        <span className = "text-gray-500 dark: text-gray-400">APY:</span>"","
                        <span className="text-green-600 font-medium">{position.apy}%</span>;"
                        <span className = "text-gray-500 dark: text-gray-400">Rewards:</span>"","
                        <span className="text-orange-600 font-medium">{position.rewards}</span>;"
                        <span className = "text-gray-500 dark: text-gray-400">Started:</span>"","
                        <span className="text-gray-900 dark:text-white"> {position.startDate.toLocaleDateString()}"
"""{activeTab === "transactions" && (<motion.div key="transactions" initial = {}"
""""})} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">""""
                  Add Position",
              <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">""""{defiPositions.map((position) => (<div key="{position.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">""""
                    <div className="flex items-center justify-between mb-3">""""",
                      <h4 className="font-medium text-gray-900 dark:text-white">{position.protocol}</h4>"""""
                      <span className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type === "staking" ? "bg-green-100 text-green-800" :""""
                    <div className="space-y-3">""""
                        <span className="text-gray-500 dark: text-gray-400">Asset:</span>"""",
                        <span className="font-medium text-gray-900 dark:text-white">{position.asset}</span>"
                        <span className="text-gray-500 dark: text-gray-400">Amount:</span>"""",
                        <span className="font-medium text-gray-900 dark:text-white">{position.amount}</span>"
                        <span className="text-gray-500 dark: text-gray-400">APY:</span>"""",
                        <span className="text-green-600 font-medium">{position.apy}%</span>"
                        <span className="text-gray-500 dark: text-gray-400">Rewards:</span>"""",
                        <span className="text-orange-600 font-medium">{position.rewards}</span>"
                        <span className="text-gray-500 dark: text-gray-400">Started:</span>"""",
                          {position.startDate.toLocaleDateString()}
""""""{activeTab: === "transactions" && (<motion.div key = "transactions" initial = {}", { opacity:  ,0,"
                <h3: className="text-lg font-semibold text-gray-900 dark: text-white">Transaction: History""""",";"
                <button: onClick="{()" => setShowSendTransaction(true)} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">""""",";"
                  <Send : className = "w-4 h-4 inline mr-2"  />",",
                  Send: Transaction",,
              <div: className="space-y-3">""""{transactions.map((tx) => (<div key="{tx.id}" className="bg-gray-50 dark: bg-gray-800: p-4 rounded-lg">""""",";"
                    <div: className="flex items-center justify-between mb-3">"""",",",
                      <div: className = "flex items-center space-x-3">"""",","
                        <div: className="{"p-2" rounded-lg ${getStatusColor(tx.status)}"}>""""";";"
                          <Coins : className = "w-4 h-4"  />",","
                          <p: className="font - medium text-gray-900 dark: text-white">"," {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction"""","
                          <p: className="text-sm text-gray-500 dark: text-gray-400">",
                            Hash: {tx.hash.slice(,0, 8)}...{tx.hash.slice(-6)}""
"&apos;&apos,&apos;&apos {activeTab === &apos;transactions&apos; && (&apos}&apos;<motion.div key="&apos;transactions&apos;" initial = {}"
                <h3 className="text-lg font-semibold text-gray-900 dark: text-white">Transaction History"","
                <button onClick="{()" => setShowSendTransaction(true)} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">"",",
                  <Send className = "w-4 h-4 inline mr-2"   />,
                  Send Transaction,"
              <div className="space-y-3">""{transactions.map((tx) => (<div key="{tx.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">"",",
                    <div className = "flex items-center justify-between mb-3">"","
                      <div className="flex items-center space-x-3">""","
                        <div className="{"p-2" rounded-lg ${getStatusColor(tx.status)}"}>"";"
                          <Coins className="w-4 h-4"   />;"
                          <p className="font-medium text-gray-900 dark:text-white"> {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction"";"
                          <p className = "text-sm text-gray-500 dark: text-gray-400">,
                            Hash: {tx.hash.slice(0, 8)}...{tx.hash.slice(-6)}"
                          </p>""
                        </div>"""
                      </div>"""";"
                      <span className = "{"px-2" py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}"}> {tx.status}"
                    <div className="grid grid-cols-1 md: grid-cols-3 gap-4 text-sm">"","
                        <span className="text-gray-500 dark:text-gray-400">From:</span>"","
                        <code className="block text-xs font-mono mt-1"> {tx.from.slice(0, 8)}...{tx.from.slice(-6)}"
                        <span className="text-gray-500 dark: text-gray-400">To:</span>"","
                        <code className="block text-xs font-mono mt-1"> {tx.to.slice(0, 8)}...{tx.to.slice(-6)}"
                        <span className="text-gray-500 dark: text-gray-400">Value:</span>"","
                        <p className="font-medium text-gray-900 dark:text-white mt-1">{tx.value} ETH</p>;"
                    <div className = "mt-3 pt-3 border-t border-gray-200 dark: border-gray-600">"","
                          <span className="text-gray-500 dark:text-gray-400">Gas Used:</span>"","
                          <p className="text-gray-900 dark:text-white">{tx.gasUsed}</p>;"
                          <span className = "text-gray-500 dark: text-gray-400">Gas Price:</span>"","
                          <p className="text-gray-900 dark:text-white">{tx.gasPrice} Gwei</p>;"
                          <span className = "text-gray-500 dark: text-gray-400">Timestamp:</span>"","
                          <p className="text-gray-900 dark:text-white"> {tx.timestamp.toLocaleString()}
                    </div> { opacity: 0,"
                <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white&apos;>Transaction History&apos,&apos,&apos,"&apos,&apos,"
                <button onClick="{()" => setShowSendTransaction(true)} className="&apos;px-3" py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&apos,>"&apos,&apos,&apos;&apos;"
                  <Send className="&apos;w-4" h-4 inline mr-2&apos;        />
                  Send Transaction&apos,",
              <div className="&apos;space-y-3&apos;">"&apos,&apos,"{transactions.map((tx) => (&apos}&apos;<div key="{tx.id}" className="&apos;bg-gray-50" dark: bg-gray-800 p-4 rounded-lg&apos,>"&apos,&apos,&apos;&apos;"
                    <div className="&apos;flex" items-center justify-between mb-3&apos;>"&apos;"&apos,",
                      <div className="&apos;flex" items-center space-x-3&apos;>"&apos,"&apos,""
                        <div className="{"p-2" rounded-lg ${getStatusColor(tx.status)}"}>&apos;&apos,&apos;&apos,"
                          <Coins className="&apos;w-4" h-4&apos;        />&apos,
                        </div>&apos;&apos,&apos;&apos;"
                          <p className="&apos;font-medium" text-gray-900 dark: text-white&apos,>"
                            {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction&apos;&apos,&apos;&apos;"
                          <p className="&apos;text-sm" text-gray-500 dark: text-gray-400&apos,>
                            Has,h: {tx.hash.slice(0, 8)}...{tx.hash.slice(-6)}"&apos,
""""""{activeTab = == "transactions" && (<motion.div key="transactions" initial = {}"
                <h3 className="text-lg font-semibold text-gray-900 dark: text-white">Transaction History"""",
                <button onClick="{()" => setShowSendTransaction(true)} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">""""
                  <Send className="w-4 h-4 inline mr-2"   />
                  Send Transaction",
              <div className="space-y-3">""""{transactions.map((tx) => (<div key="{tx.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">""""
                    <div className="flex items-center justify-between mb-3">""""
                      <div className="flex items-center space-x-3">"""",
                        <div className="{"p-2" rounded-lg ${getStatusColor(tx.status)}"}>""""
                          <Coins className="w-4 h-4"   />"
                          <p className="font-medium text-gray-900 dark: text-white">",
                            {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction""""
                          <p className="text-sm text-gray-500 dark: text-gray-400">,
Hash: {tx.hash.slice(0, 8)}...{tx.hash.slice(-6)}"
                          </p>""
                        </div>"""
                      </div>"""""
                      <span: className="{"px-2" py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}"}>" {tx.status}"
                    <div: className="grid grid-cols-1 md: grid-cols-3: gap-4 text-sm">"""",";"
                        <span: className="text-gray-500 dark: text-gray-400">From:</span>""""",";"
                        <code: className = "block text-xs font-mono mt-1">"," {tx.from.slice(0, 8)}...{tx.from.slice(-6)}"
                        <span: className="text-gray-500 dark: text-gray-400">To:</span>""""",";"
                        <code: className = "block text-xs font-mono mt-1">"," {tx.to.slice(0, 8)}...{tx.to.slice(-6)}"
                        <span: className="text-gray-500 dark: text-gray-400">Value:</span>""""",";"
                        <p: className="font - medium text-gray-900 dark: text-white: mt-1">{tx.valu,e} ETH</p>","
                    <div: className="mt-3 pt-3 border-t border-gray-200 dark: border-gray-600">""""",";"
                          <span: className="text-gray-500 dark: text-gray-400">Gas: Used:</span>""""",";"
                          <p: className="text - gray-900 dark: text-white">{tx.gasUse,d}</p>","
                          <span: className="text-gray-500 dark: text-gray-400">Gas: Price:</span>""""",";"
                          <p: className="text - gray-900 dark: text-white">{tx.gasPric,e} Gwei</p>","
                          <span: className="text-gray-500 dark: text-gray-400">Timestamp:</span>""""",";"
                          <p: className="text-gray-900 dark: text-white">",";"
                    <div className="&apos;grid" grid-cols-1 md: grid-cols-3 gap-4 text-sm&apos,>"&apos,&apos,"",
                        <span className="&apos,text-gray-500" dark:text-gray-400&apos,>Fro,m: &apos,</span>&apos,&apos,&apos;&apos,"",
                        <code className = "&apos,block" text-xs font-mono mt-1&apos,>
                          {tx.from.slice(0, 8)}...{tx.from.slice(-6)}&apos;"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos,>T,o: &apos,</span>&apos,&apos,"&apos,&apos,"
                          {tx.to.slice(0, 8)}...{tx.to.slice(-6)}&apos;"
                        <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Value:&apos,</span>&apos,&apos,&apos,&apos,"
                        <p className="&apos,font-medium" text-gray-900 dar,k: text-white mt-1&apos,>{tx.value} ETH&apos;</p>"
                    <div className="&apos;mt-3" pt-3 border-t border-gray-200 dark: border-gray-600&apos,>"&apos,&apos,&apos;&apos,",
                          <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Gas Used:&apos,</span>&apos,&apos,&apos,&apos,"
                          <p className="&apos,text-gray-900" dar,k: text-white&apos,>{tx.gasUsed}&apos;</p>"
                          <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Gas Price:&apos,</span>&apos,&apos,&apos,&apos,""
                          <p className="&apos,text-gray-900" dar,k: text-white&apos,>{tx.gasPrice} Gwei&apos;</p>"
                          <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Timestamp:&apos,</span>&apos,&apos,&apos,&apos,"
                          <p className = "&apos,text-gray-900" dar,k: text-white&apos,>
                            {tx.timestamp.toLocaleString()}&apos,
                    </div>"""
                    <div className = "grid grid-cols-1 md: grid-cols-3 gap-4 text-sm">""""
                        <span className="text-gray-500 dark:text-gray-400">From:</span>""""
                        <code className="block text-xs font-mono mt-1">,
                          {tx.from.slice(0, 8)}...{tx.from.slice(-6)}"
                        <span className="text-gray-500 dark: text-gray-400">To:</span>"""",
                          {tx.to.slice(0, 8)}...{tx.to.slice(-6)}"
                        <span className="text-gray-500 dark: text-gray-400">Value:</span>"""",
                        <p className="font-medium text-gray-900 dark:text-white mt-1">{tx.value} ETH</p>"
                    <div className="mt-3 pt-3 border-t border-gray-200 dark: border-gray-600">""""
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">""""
                          <span className="text-gray-500 dark:text-gray-400">Gas Used:</span>"""",
                          <p className="text-gray-900 dark:text-white">{tx.gasUsed}</p>"
                          <span className="text-gray-500 dark: text-gray-400">Gas Price:</span>"""",
                          <p className="text-gray-900 dark:text-white">{tx.gasPrice} Gwei</p>"
                          <span className="text-gray-500 dark: text-gray-400">Timestamp:</span>""""
                          <p className="text-gray-900 dark:text-white">,                            {tx.timestamp.toLocaleString()}
            </motion.div>) }
;
        </AnimatePresence>;
      </div> {/* comment */}"";";
      <AnimatePresence>""{showMintNFT && (<motion.div initial="{{" "opacity": "0 "}} animate="{{" "opacity": "1 "}} exit="{{" "opacity": "0 "}} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">;
            <motion.div initial = {}
;
  {"scale": "0.9",;
"opacity": "0"}} animate = {}
;
  {"scale": "1>;
"opacity": 1"}} exit = {}";
  "opacity": "0 """,">;
""}} className="bg-white "dark": "bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">""",";
              <h3 className="text-lg font-semibold text-gray-900 "dark": "text-white mb-4">Mint New NFT</h3>""",",;
              <div className = "space-y-4">"",";
                    Name"",";
                  <input type="text" value="{nftForm.name}" onChange = {}>;
  (e) => setNftForm(prev = > ({...prev,,;
  "name": "e.target.value """,";
""}))} className="w-full px-3 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg bg-white "dark":bg-gray-700 text-gray-900 "dark":text-white" placeholder="NFT Name" />",,;
                    Description,;
                  </label>,";
                  <textarea value = "{nftForm.description}" onChange = {}";
  "description": "e.target.value """,">;
""}))} className="w - full px-3 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg bg-white "dark":bg-gray-700 text-gray-900 "dark":text-white" placeholder="NFT Description" rows="{3"}/">,;
                    Image URL (optional)"";";
                  <input type = "url" value="{nftForm.image}" onChange = {}";
  "image": "e.target.value """,";
""}))} className="w-full px-3 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg bg-white "dark":bg-gray-700 text-gray-900 "dark":text-white" placeholder=""https":// comment;
              <div className="flex space-x-3 mt-6">""",";
                <button onClick="{handleMintNFT}" disabled="{!nftForm.name.trim()" || isProcessing} className="flex-1 px-4 py-2 text-white bg-purple-600 rounded-lg "hover": "bg-purple-700 "disabled":opacity-50">"{isProcessing ? "Minting..." : "Mint NFT""}";
                <button onClick="{()" => setShowMintNFT(false)} className="flex-1 px-4 py-2 text-gray-700 "dark": "text-gray-300 bg-gray-100 "dark":bg-gray-700 rounded-lg "hover":bg-gray-200 "dark":"hover":bg-gray-600">",,;
                  Cancel,;
            </motion.div>,";
      </AnimatePresence> {/* comment */}"";";
      <AnimatePresence>""{showSendTransaction && (<motion.div initial="{{" "opacity": "0 "}} animate="{{" "opacity": "1 "}} exit="{{" "opacity": "0 "}} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">;";
              <h3 className = "text-lg font-semibold text-gray-900 "dark": "text-white mb-4">Send Transaction</h3>""",";
                    To Address"",";
                  <input type="text" value="{transactionForm.to}" onChange = {}>;
  (e) => setTransactionForm(prev = > ({...prev,,;
  "to": "e.target.value """,";
""}))} className = "w-full px-3 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg bg-white "dark":bg-gray-700 text-gray-900 "dark":text-white" placeholder="0x..." />",";
                    Amount (ETH)"",";
                  <input type="number" step="0.001" value="{transactionForm.value}" onChange = {}";
  "value": "e.target.value """,";
""}))} className="w-full px-3 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg bg-white "dark":bg-gray-700 text-gray-900 "dark":text-white" placeholder="0.1"    />",;
                    Data(optional),";
                  <textarea value="{transactionForm.data}" onChange = {}";
  "data": "e.target.value """,">;
""}))} className="w-full px-3 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg bg-white "dark":bg-gray-700 text-gray-900 "dark":text-white" placeholder="0x..." rows="{3"}/">;";
                <button onClick = "{handleSendTransaction}" disabled="{!transactionForm.to.trim()" || !transactionForm.value || isProcessing} className="flex-1 px-4 py-2 text-white bg-green-600 rounded-lg "hover": "bg-green-700 "disabled":opacity-50">"{isProcessing ? "Sending..." : "Send Transaction""}";
                <button onClick="{()" => setShowSendTransaction(false)} className="flex-1 px-4 py-2 text-gray-700 "dark": "text-gray-300 bg-gray-100 "dark":bg-gray-700 rounded-lg "hover":bg-gray-200 "dark":"hover":bg-gray-600">",;
    </div>)}"";
"""";
        </AnimatePresence>";
      {/* comment */}"""";";";
      <AnimatePresence>""""{"showMintNFT": "&& (<motion.div initial = "{{" "opacity": 0"}} animate="{{" "opacity": "1"}} exit="{{" "opacity": "0"}} className=""fixed": "inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">"",",;
            <motion."div": "initial = {"}
;
  {"scale": "0.",9,;
  "opacity": ",0"}} "animate": "= {"}
;
  {"scale": ",1>;
  "opacity":  ",1}} "exit": "= {"}>;
  "opacity": "0": """,",";";
""""}} className="bg-"white": "dark": "bg-gray-"800": rounded-lg p-6 w-full max-w-md mx-4">"""""",";";
              <"h3": "className="text-lg font-semibold text-gray-900 "dark": text-"white": mb-4">Mint New NFT</h3>"""",",";";
              <"div": "className="space - y-4">""""",,",;
                    Name"""",",";
                  <"input": "type="text" value="{nftForm.name"}" onChange = {}", (e) => setNftForm("prev": "=> ({...prev",";
  "name": "e.target."value": """"",";";
""""}))} className="w-"full": "px-3 py-2 border border-gray-300 "dark": border-gray-"600": rounded-lg bg-white "dark":bg-gray-"700": text-gray-900 "dark":text-white" placeholder=""NFT": Name" />"",;
                    "Description": "</label>",;
  (e) => setNftForm(prev = > ({...prev,;
  "description": "e.target."value": """"",";";
""""}))} className = "w - "full": "px-3 py-2 border border-gray-300 "dark": border-gray-"600": rounded-lg bg-white "dark":bg-gray-"700": text-gray-900 "dark":text-white" placeholder=""NFT": Description" rows="{",3}/">",,;
                    "Image": "URL (optional)""""",",";
                  <"input": "type = "url" value="{nftForm.image"}" onChange = {}", (e) => setNftForm("prev": "=> ({...prev",";
  "image": "e.target."value": """"",";";
""""}))} className="w-"full": "px-3 py-2 border border-gray-300 "dark": border-gray-"600": rounded-lg bg-white "dark":bg-gray-"700": text-gray-900 "dark":text-white" placeholder=""https":// comment;
              <"div": className = "flex space-x-3 mt-6">"""""",",";
                <"button": "onClick="{handleMintNFT"}" disabled="{!nftForm.name.trim()" || isProcessing} className="flex - 1 px-4 py-2 text-white bg-purple-600 rounded-lg "hover": "bg-purple-"700": "disabled":opacity-50">"{"isProcessing": ? "Minting..." : ""Mint": NFT","}",";
                <"button": "onClick="{()" => setShowMintNFT(false)"} className="flex-1 px-4 py-2 text-gray-700 "dark": "text-gray-"300": bg-gray-100 "dark":bg-gray-"700": rounded-lg "hover":bg-gray-"200": "dark":"hover":bg-gray-600">"",;
                  "Cancel": "</button>"",;
      {/* comment */}&apos;&apos,&apos;&apos;";
      <AnimatePresence>&apos;&apos,&apos {showMintNFT && (&apos}&apos;<motion.div initial="{{" "opacity": "0 "}} animate="{{" "opacity": "1 "}} exit="{{" "opacity": "0 "}} className="&apos;fixed" inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50&apos;>&apos,";
      {/* comment */}"""";
      <AnimatePresence>""""{showMintNFT && (<motion.div initial = "{{" "opacity": "0 "}} animate="{{" "opacity": "1 "}} exit="{{" "opacity": "0 "}} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">;
  {"scale": "0.9", "opacity": "0"}} animate = {}
;
  { "scale": "1",;
  { "scale": "0.9",;
"opacity": "0;
"}} className="bg-white "dark": "bg-gray - 800 rounded-lg p - 6 w-full max - w-md mx -4">;
              <h3 className="text-lg font - semibold text-gray - 900 "dark":text-white mb-4">Mint New NFT</h3>;
";
"}} className="bg-white "dark": "bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">";
              <h3 className="text-lg font-semibold text-gray-900 "dark":text-white mb-4">Mint New NFT</h3>;
";
              <div className="space-y-4">;
                <div>";
                  <label className="block text-sm font-medium text-gray-700 "dark":text-gray-300 mb-1">;
                    Name;
                  </label>;
                  <input type="text" value={nftForm.name"} onChange={ (e) => setNftForm(prev => ({ ...prev,;
  "name": "e.target.value;
";
"}))} className="w-full px-3 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg bg-white "dark":bg-gray-700 text-gray-900 "dark":text-white" placeholder="NFT Name"/>;
                </div>;
  {scale: 1>
opacity: 1}} exit = {}"
  opacity: 0 "",">
""}} className="bg-white dark: bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">"","
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mint New NFT"",",
              <div className = "space-y-4">"","
                    Name"","
                  <input type="text" value="{nftForm.name}" onChange = {}>
  (e) => setNftForm(prev = > ({...prev,,
  name: e.target.value "","
""}))} className="w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Name" />,,
                    Description,
                  </label>,"
                  <textarea value = "{nftForm.description}" onChange = {}"
  description: e.target.value "",">
""}))} className="w - full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Description" rows="{3}/">,
                    Image URL (optional)"";"
                  <input type = "url" value="{nftForm.image}" onChange = {}"
  image: e.target.value "","
""}))} className="w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="https:// comment
              <div className="flex space-x-3 mt-6">"","
                <button onClick="{handleMintNFT}" disabled="{!nftForm.name.trim()" || isProcessing} className="flex-1 px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50">"{isProcessing ? "Minting..." : "Mint NFT"}"
                <button onClick="{()" => setShowMintNFT(false)} className="flex-1 px-4 py-2 text-gray-700 dark: text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">,,
                  Cancel,
            </motion.div>,"
      </AnimatePresence> {/* comment */}"";"
      <AnimatePresence>""{showSendTransaction && (<motion.div initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} exit="{{" opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">;"
              <h3 className = "text-lg font-semibold text-gray-900 dark: text-white mb-4">Send Transaction"","
                    To Address"","
                  <input type="text" value="{transactionForm.to}" onChange = {}>
  (e) => setTransactionForm(prev = > ({...prev,,
  to: e.target.value "","
""}))} className = "w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0x..." />,"
                    Amount (ETH)"","
                  <input type="number" step="0.001" value="{transactionForm.value}" onChange = {}"
  value: e.target.value "","
""}))} className="w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0.1"    />,
                    Data(optional),"
                  <textarea value="{transactionForm.data}" onChange = {}"
  data: e.target.value "",">
""}))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0x..." rows="{3}/">;"
                <button onClick = "{handleSendTransaction}" disabled="{!transactionForm.to.trim()" || !transactionForm.value || isProcessing} className="flex-1 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50">"{isProcessing ? "Sending..." : "Send Transaction"}"
                <button onClick="{()" => setShowSendTransaction(false)} className="flex-1 px-4 py-2 text-gray-700 dark: text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">,
    </div>)}""
""""
        </AnimatePresence>"
      {/* comment */}"""";";"
      <AnimatePresence>""""{showMintNFT: && (<motion.div initial = "{{" opacity: 0}} animate="{{" opacity: 1}} exit="{{" opacity: 0}} className="fixed: inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">",",
            <motion.div: initial = {}
                <div>";
                  <label className="block text-sm font-medium text-gray-700 "dark":text-gray-300 mb-1">;
                    Description;
                  </label>;
                  <textarea value={nftForm.description"} onChange={ (e) => setNftForm(prev => ({ ...prev,;
  "description": "e.target.value;
";
"}))} className="w-full px-3 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg bg-white "dark":bg-gray-700 text-gray-900 "dark":text-white" placeholder="NFT Description" rows={3"}/>;
                </div>;
                <div>;
                  <label className="block text-sm font - medium text-gray - 700 "dark": "text-gray - 300 mb-1">;
                    Image URL(optional) </label>;
                  <input type="url" value={nftForm.image"} onChange={ (e) => setNftForm(prev => ({ ...prev,;
  "image": "e.target.value;
";
"}))} className="w-full px-3 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg bg-white "dark":bg-gray-700 text-gray-900 "dark":text-white" placeholder=""https"://example.com/image.jpg"/>;
                </div>;
              </div>;
";
              <div className="flex space-x-3 mt-6">";
                <button onClick={handleMintNFT"} disabled={!nftForm.name.trim() || isProcessing} className="flex-1 px-4 py-2 text-white bg-purple-600 rounded-lg "hover": "bg-purple-700 "disabled":opacity-50">;
                  {isProcessing ? 'Minting...' : 'Mint NFT'"}
                </button>;
";
                <button onClick={() => setShowMintNFT(false)} className="flex-1 px-4 py-2 text-gray-700 "dark": "text-gray-300 bg-gray-100 "dark":bg-gray-700 rounded-lg "hover":bg-gray-200 "dark":"hover":bg-gray-600">;
                  Cancel;
                </button>;
              </div>;
            </motion.div>;
          </motion.div>) "}
      </AnimatePresence>;
  {scale:  ,1>
  opacity:  ,1}} exit: = {}>
  opacity: 0: """,",";"
""""}} className="bg-white: dark: bg-gray-800: rounded-lg p-6 w-full max-w-md mx-4">""""",";"
              <h3: className="text-lg font-semibold text-gray-900 dark: text-white: mb-4">Mint New NFT""",",";"
              <div: className="space - y-4">"""",,",
                    Name"""",","
                  <input: type="text" value="{nftForm.name}" onChange = {}", (e) => setNftForm(prev: => ({...prev,"
  name: e.target.value: """",";"
""""}))} className="w-full: px-3 py-2 border border-gray-300 dark: border-gray-600: rounded-lg bg-white dark:bg-gray-700: text-gray-900 dark:text-white" placeholder="NFT: Name" />",
                    Description: </label>,
  (e) => setNftForm(prev = > ({...prev,
  description: e.target.value: """",";"
""""}))} className = "w - full: px-3 py-2 border border-gray-300 dark: border-gray-600: rounded-lg bg-white dark:bg-gray-700: text-gray-900 dark:text-white" placeholder="NFT: Description" rows="{,3}/">",,
                    Image: URL (optional)"""",","
                  <input: type = "url" value="{nftForm.image}" onChange = {}", (e) => setNftForm(prev: => ({...prev,"
  image: e.target.value: """",";"
""""}))} className="w-full: px-3 py-2 border border-gray-300 dark: border-gray-600: rounded-lg bg-white dark:bg-gray-700: text-gray-900 dark:text-white" placeholder="https:// comment
              <div: className = "flex space-x-3 mt-6">""""",","
                <button: onClick="{handleMintNFT}" disabled="{!nftForm.name.trim()" || isProcessing} className="flex - 1 px-4 py-2 text-white bg-purple-600 rounded-lg hover: bg-purple-700: disabled:opacity-50">"{isProcessing: ? "Minting..." : "Mint: NFT,"}","
                <button: onClick="{()" => setShowMintNFT(false)} className="flex-1 px-4 py-2 text-gray-700 dark: text-gray-300: bg-gray-100 dark:bg-gray-700: rounded-lg hover:bg-gray-200: dark:hover:bg-gray-600">",
                  Cancel: </button>",
      {/* comment */}&apos;&apos,&apos;&apos;"
      <AnimatePresence>&apos;&apos,&apos {showMintNFT && (&apos}&apos;<motion.div initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} exit="{{" opacity: 0 }} className="&apos;fixed" inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50&apos;>&apos,"
      {/* comment */}""""
      <AnimatePresence>""""{showMintNFT && (<motion.div initial = "{{" opacity: 0 }} animate="{{" opacity: 1 }} exit="{{" opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  {scale: 0.9, opacity: 0}} animate = {}
  { scale: 1,
  { scale: 0.9,
opacity: 0
}} className="bg-white dark:bg-gray - 800 rounded-lg p - 6 w-full max - w-md mx -4">
              <h3 className="text-lg font - semibold text-gray - 900 dark:text-white mb-4">Mint New NFT
"
}} className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">"
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mint New NFT
"
              <div className="space-y-4">
                <div>"
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input type="text" value={nftForm.name} onChange={ (e) => setNftForm(prev => ({ ...prev,
  name: e.target.value
"
}))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Name"/>
                </div>
                <div>"
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea value={nftForm.description} onChange={ (e) => setNftForm(prev => ({ ...prev,
  description: e.target.value
"
}))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Description" rows={3}/>
                </div>
                <div>
                  <label className="block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1">
                    Image URL(optional) </label>
                  <input type="url" value={nftForm.image} onChange={ (e) => setNftForm(prev => ({ ...prev,
  image: e.target.value
"
}))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="https://example.com/image.jpg"/>
                </div>
              </div>
"
              <div className="flex space-x-3 mt-6">"
                <button onClick={handleMintNFT} disabled={!nftForm.name.trim() || isProcessing} className="flex-1 px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50">
                  {isProcessing ? 'Minting...' : 'Mint NFT'}
                </button>
"
                <button onClick={() => setShowMintNFT(false)} className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>) }
      </AnimatePresence>
      {/* Send Transaction Modal */}
      <AnimatePresence>";
        {showSendTransaction && (<motion.div initial={{ "opacity": "0 "}} animate={{ "opacity": "1 "}} exit={{ "opacity": "0 "}} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">;
            <motion.div initial = {;
  { "scale": "0.9",;
  "opacity": "0;
"}} animate = {;
  { "scale": "1",;
  "opacity": "1;
"}} exit = {;
  { "scale": "0.9",;
  "opacity": "0;
"}} className="bg-white "dark": "bg-gray - 800 rounded-lg p - 6 w-full max - w-md mx -4">;
              <h3 className="text-lg font - semibold text-gray - 900 "dark":text-white mb-4">Send Transaction</h3>;
";
"}} className="bg-white "dark": "bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">";
              <h3 className="text-lg font-semibold text-gray-900 "dark":text-white mb-4">Send Transaction</h3>;
";
              <div className="space-y-4">;
                <div>";
                  <label className="block text-sm font-medium text-gray-700 "dark":text-gray-300 mb-1">;
                    To Address;
                  </label>;
                  <input type="text" value={transactionForm.to"} onChange={ (e) => setTransactionForm(prev => ({ ...prev,;
  "to": "e.target.value;
";
"}))} className="w-full px-3 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg bg-white "dark":bg-gray-700 text-gray-900 "dark":text-white" placeholder="0x..."/>;
                </div>;
}} className="bg-white dark:bg-gray - 800 rounded-lg p - 6 w-full max - w-md mx -4">
              <h3 className="text-lg font - semibold text-gray - 900 dark:text-white mb-4">Send Transaction
"
}} className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">"
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Send Transaction
"
              <div className="space-y-4">
                <div>"
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    To Address
                  </label>
                  <input type="text" value={transactionForm.to} onChange={ (e) => setTransactionForm(prev => ({ ...prev,
  to: e.target.value
"
}))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0x..."/>
                </div>
                <div>;
                  <label className="block text-sm font - medium text-gray - 700 "dark":text-gray - 300 mb-1">;
                    Amount(ETH) </label>;
                  <input type="number" step="0.001" value={transactionForm.value"} onChange={ (e) => setTransactionForm(prev => ({ ...prev,;
  "value": "e.target.value;
";
"}))} className="w-full px-3 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg bg-white "dark":bg-gray-700 text-gray-900 "dark":text-white" placeholder="0.1"/>;
                </div>;
                <div>;
                  <label className="block text-sm font - medium text-gray - 700 "dark":text-gray - 300 mb-1">;
                    Data(optional) </label>;
                  <textarea value={transactionForm.data"} onChange={ (e) => setTransactionForm(prev => ({ ...prev,;
  "data": "e.target.value;
";
"}))} className="w-full px-3 py-2 border border-gray-300 "dark": "border-gray-600 rounded-lg bg-white "dark":bg-gray-700 text-gray-900 "dark":text-white" placeholder="0x..." rows={3"}/>;
                </div>;
              </div>;
";
              <div className="flex space-x-3 mt-6">";
                <button onClick={handleSendTransaction} disabled={!transactionForm.to.trim() || !transactionForm.value || isProcessing} className="flex-1 px-4 py-2 text-white bg-green-600 rounded-lg "hover": "bg-green-700 "disabled":opacity-50">;
                  {isProcessing ? 'Sending...' : 'Send Transaction'"}
                </button>;
";
                <button onClick={() => setShowSendTransaction(false)} className="flex-1 px-4 py-2 text-gray-700 "dark": "text-gray-300 bg-gray-100 "dark":bg-gray-700 rounded-lg "hover":bg-gray-200 "dark":"hover":bg-gray-600">;
                  Cancel;
                </button>;
              </div>;
            </motion.div>;
          </motion.div>) "}
      </AnimatePresence>;
    </div>)};
'"`;
</textarea>;
</motion>;
</motion>;
</textarea>;
</motion>;
</motion>;
</AnimatePresence>;
</button>;
</div>;
</motion>;
</motion>;
</AnimatePresence>;
</button>;
</button>;
</textarea>;
</motion>;
</button>;
</button>;
</textarea>;
</div>;
</motion>;
</motion>;
</p>;
</div>;
</code>;
</div>;
</p>;
</code>;
</div>;
</p>;
</div>;
</code>;
</code>;
</div>;
</span>;
</p>;
</div>;
</div>;
</div>;
</button>;
</motion>;
</p>;
</p>;
</div>;
</div>;
</div>;
</div>;
</button>;
</p>;
</code>;
</code>;
</div>;
</span>;
</p>;
</div>;
</div>;
</div>;
</button>;
</motion>;
</p>;
</p>;
</div>;
</div>;
</div>;
</div>;
</div>;
</button>;
</motion>;
</div>;
</span>;
</div>;
</div>;
</div>;
</motion>;
</span>;
</div>;
</span>;
</div>;
</div>;
</div>;
</motion>;
</div>;
</span>;
</div>;
</div>;
</div>;
</motion>;
</div>;
</span>;
</div>;
</div>;
</div>;
</motion>;
</motion>;
</div>;
</div>;
</div>;
</div>;
</button>;
</motion>;
</div>;
</div>;
</div>;
</button>;
</div>;
</span>;
</code>;
</div>;
</div>;
</div>;
</button>;
</motion>;
</div>;
</span>;
</code>;
</div>;
</div>;
</button>;
</motion>;
</span>;
</code>;
</div>;
</span>;
</div>;
</div>;
</div>;
</div>;
</motion>;
</span>;
</code>;
</div>;
</span>;
</div>;
</div>;
</div>;
</motion>;
</span>;
</div>;
</div>;
</div>;
</button>;
</div>;
</motion>;
</span>;
</div>;
</div>;
</div>;
</div>;
</button>;
</div>;
</motion>;
</button>;
</button>;
</div>;
</p>;
</button>;
</div>;
</div>;
</div>;
</div>;
</div>;
</div>;
</div>;
</motion>;
</button>;
</button>;
</div>;
</div>;
</div>;
</div>;
</div>;
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
</div>;
</div>;
</div>;
</div>;
</div>;
</div>;
</div>
</textarea>
</motion>
</motion>
</textarea>
</motion>
</motion>
</AnimatePresence>
</button>
</div>
</motion>
</motion>
</AnimatePresence>
</button>
</button>
</textarea>
</motion>
</button>
</button>
</textarea>
</div>
</motion>
</motion>
</p>
</div>
</code>
</div>
</p>
</code>
</div>
</p>
</div>
</code>
</code>
</div>
</span>
</p>
</div>
</div>
</div>
</button>
</motion>
</p>
</p>
</div>
</div>
</div>
</div>
</button>
</p>
</code>
</code>
</div>
</span>
</p>
</div>
</div>
</div>
</button>
</motion>
</p>
</p>
</div>
</div>
</div>
</div>
</div>
</button>
</motion>
</div>
</span>
</div>
</div>
</div>
</motion>
</span>
</div>
</span>
</div>
</div>
</div>
</motion>
</div>
</span>
</div>
</div>
</div>
</motion>
</div>
</span>
</div>
</div>
</div>
</motion>
</motion>
</div>
</div>
</div>
</div>
</button>
</motion>
</div>
</div>
</div>
</button>
</div>
</span>
</code>
</div>
</div>
</div>
</button>
</motion>
</div>
</span>
</code>
</div>
</div>
</button>
</motion>
</span>
</code>
</div>
</span>
</div>
</div>
</div>
</div>
</motion>
</span>
</code>
</div>
</span>
</div>
</div>
</div>
</motion>
</span>
</div>
</div>
</div>
</button>
</div>
</motion>
</span>
</div>
</div>
</div>
</div>
</button>
</div>
</motion>
</button>
</button>
</div>
</p>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</motion>
</button>
</button>
</div>
</div>
</div>
</div>
</div>
</button>
</div>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
import {useState,useCallback} from &apos;react&apos;;&apos; import {motion,AnimatePresence} from &apos;framer-motion&apos;;&apos; import {Wallet,Smartphone,Coins,Image,TrendingUp,BarChart3,Plus,Send,Download,Loader2} from &apos;lucide-react&apos;; ; export const BlockchainWeb3Dashboard = (props) => { const { trackEvent }; = useAnalytics({enableTracking: true,enableUserBehaviorTracking: true});&apos; const [activeTab,setActiveTab] = useState(&apos;overview&apos;); const [showMintNFT,setShowMintNFT] = useState(false); const [showSendTransaction,setShowSendTransaction] = useState(false); const {wallet,contracts,nfts,defiPositions,transactions,metrics,isConnecting,isProcessing,connectWallet,disconnectWallet,switchNetwork,addContract,mintNFT,sendTransaction,createDeFiPosition} = useBlockchainWeb3(); const [nftForm,setNftForm] = useState({} &apos; &quot; &quot; name: &quot;,&quot; description: &quot;,&quot; image: &quot; };); const [transactionForm,setTransactionForm] = useState({} &apos; &quot; &quot; to: &quot;,&quot; value: &quot;,&quot; data: &quot; };); const handleConnectWallet = useCallback(async () => {} try: {},await: connectWallet()&quot;,&quot;,&quot; trackEvent(&quot;blockchain&quot;,dashboard&quot;,wallet_connected&quot;)}&quot; catch: (error) {}&quot; export const BlockchainWeb3Dashboard = (props) => {&quot; const { trackEvent }; = useAnalytics();&quot; export const BlockchainWeb3Dashboard = (props) => {const { trackEvent } = useAnalytics({enableTracking: true,enableUserBehaviorTracking: true};)&quot;;&quot; export const BlockchainWeb3Dashboard = memo(({className = &quot;}) => { const { trackEvent } = useAnalytics({enableTracking: true,enableUserBehaviorTracking: true};)&quot;framer-motion&quot;;react&quot;framer - motion&quot;,lucide-react&quot;;&apos;&apos export const BlockchainWeb3Dashboard = (props) => {&apos};&apos const;const {trackEvent} = useAnalytics({enableTracking: true,&quot; enableUserBehaviorTracking: true};)&quot;;&apos;&apos const [activeTab,setActiveTab] = useState(&apos;overview&apos);&apos;&quot; export const BlockchainWeb3Dashboard = (props) => {&quot; &quot;}&quot; const {trackEvent} = useAnalytics({enableTracking: true,enableUserBehaviorTracking: true})&quot; export const BlockchainWeb3Dashboard = (props) => {const [activeTab,setActiveTab] = useState(&quot;overview&quot;)} const [nftForm,setNftForm] = useState({}&quot; &quot; &quot; name: &quot;,&quot; description: &quot;,&quot; image: &quot;}) } const [transactionForm,setTransactionForm] = useState({}&quot; to: &quot;,&quot; value: &quot;,&quot; data: &quot;}) }; &apos &apos;&apos name: &apos,&apos,&apos;&apos description: &apos,&apos,&apos;&apos image: &apos,&apos})&apos;&apos to: &apos,&apos,&apos;&apos value: &apos,&apos,&apos;&apos data: &apos,&apos})&apos;&apos const handleConnectWallet = useCallback(async () => {} try {} await connectWallet() }; trackEvent(&apos;blockchain&apos,dashboard&apos,wallet_connected&apos)} catch (error) {}&quot; },[connectWallet,trackEvent]);&apos;&apos const handleMintNFT = useCallback(async () => {} if(nftForm.name.trim() && wallet) {}; const;const;const metadata = {} name: nftForm.name,description: nftForm.description,&quot; image: nftForm.image || &quot;http,s: &quot;&apos,&quot;};&quot;&apos;&apos}&quot; await mintNFT(contracts[1]?.address || &apos;&apos,metadata)&quot; setNftForm({name : &apos,&apos,description: &apos,&apos,image: &apos,&apos})&quot;,setShowMintNFT(false) } trackEvent(&apos;blockchain&apos,dashboard&apos,nft_minted&apos)} &quot;;&quot; &quot;;&quot; name: &quot;,&quot;;&quot; description: &quot;,&quot;;&quot; image: &quot;})&quot; to: &quot;,&quot;;&quot; value: &quot;,&quot;;&quot; data: &quot;})&quot; await connectWallet()&quot;;&quot; trackEvent(&quot;blockchain&quot;,dashboard&quot;,wallet_connected&quot;)}&quot; },[connectWallet,trackEvent]) } const metadata = {} name: nftForm.nam,e,description: nftForm.descriptio,n,&quot; image: nftForm.image: || &quot;https: &quot;}&quot;};&quot;;&quot;;&quot; await : mintNFT(contracts[1]?.address || &quot;,metadata)&quot;,,setNftForm({name: &quot;,&quot;,description: &quot;,&quot;,image: &quot;})&quot;;&quot; setShowMintNFT(false)&quot;;&quot;;&quot; trackEvent(&quot;blockchain&quot;,dashboard&quot;,nft_minted&quot;)}&quot;;&quot; },[nftForm,wallet,contracts,mintNFT,trackEvent]) } const handleSendTransaction = useCallback(async () => {} if(transactionForm.to.trim() && transactionForm.value && wallet) {},await: sendTransaction(transactionForm.to,transactionForm.value,transactionForm.data || null)&quot;,,setTransactionForm({to: &quot;,&quot;,value: &quot;,&quot;,data: &quot;};)&quot;;&quot; setShowSendTransaction(false)&quot;;&quot; trackEvent(&quot;blockchain&quot;,dashboard&quot;,transaction_sent&quot;)}&quot;;&quot; },[transactionForm,wallet,sendTransaction,trackEvent]) } const getStatusColor = (props) => {} switch: (status) {},case: &quot;confirmed&quot;: return: &quot;text-green-600 bg-green-100&quot;,,&quot;,case: &quot;pending&quot;: return: &quot;text-yellow-600 bg-yellow-100&quot;,,,&quot; case: &quot;failed&quot;: return: &quot;text-red-600 bg-red-100&quot;,&quot;,&quot; default: return: &quot;text-gray-600 bg-gray-100,&quot;}&quot;};&quot;;&quot;;&quot; return: (<div className=&quot;{&quot;bg-white&quot; dark: bg-gray-900: rounded-lg shadow-lg border border-gray-200 dark:border-gray-700: ${classNam,e}&quot;}>&quot;{}&quot;;&quot;;&quot; <div: className=&quot;flex items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700&quot;>&quot;,&quot;;&quot; <div: className = &quot;flex items-center space-x-3&quot;>&quot;,&quot;,&quot; <div: className=&quot;p-2 bg-blue-100 dark: bg-blue-900: rounded-lg&quot;>&quot;,&quot;;&quot; <Wallet : className = &quot;w-16 h-16 text-gray-400 mx-auto mb-4&quot; />&quot;,&quot;,&quot; <h3: className = &quot;text - lg font-medium text-gray-900 dark: text-white: mb-2&quot;>&quot;,&quot;,Connect: Your Wallet&quot;,,&quot;,</h3>&quot;,&quot;,&quot; <p: className=&quot;text - gray-500 dark: text-gray-400: mb-6&quot;>&quot;,&quot;,Connect: your Web3 wallet to start using blockchain features&quot;,,&quot;,</p>&quot;,&quot;,&quot; <button: onClick=&quot;{handleConnectWallet}&quot; disabled=&quot;{isConnecting}&quot; className=&quot;px - 6 py-3 text-white bg-blue-600 rounded-lg hover: bg-blue-700: disabled:opacity-50&quot;>&quot;{isConnecting: ? &quot;Connecting...&quot; : &quot;Connect: Wallet,&quot;}&quot;,,</button>&quot;;&quot;;&quot; </div>) : (<div: className = &quot;space-y-6&quot;>&quot;,&quot;,&quot; <div: className=&quot;bg-gray-50 dark: bg-gray-800: p-6 rounded-lg&quot;>&quot;,&quot;;&quot; <h3: className=&quot;text-lg font-semibold text-gray-900 dark: text-white: mb-4&quot;>Wallet Information</h3>&quot;,&quot;;&quot; <div: className = &quot;grid grid - cols-1 md: grid-cols-2: gap-4&quot;>&quot;,&quot;,<div>&quot;,&quot; <label: className = &quot;block text - sm font-medium text-gray-700 dark: text-gray-300: mb-1&quot;>&quot;,&quot;,Address&quot;,</label>&quot;;&quot;;&quot; <div: className = &quot;flex items-center space-x-2&quot;>&quot;,&quot;,&quot; <code: className = &quot;px - 3 py-2 bg-gray-100 dark: bg-gray-700: rounded text-sm font-mono&quot;>&quot;,&quot; {wallet.address}&quot;,,</code>&quot;;&quot;;&quot; <button: onClick=&quot;{()&quot; => navigator.clipboard.writeText(wallet.address)} className=&quot;p-2 text-gray-500 hover: text-gray-700: dark:text-gray-400: dark:hover:text-gray-200&quot;>&quot;,&quot;;&quot; <Download : className=&quot;w-4 h-4&quot; />&quot;,,</button> </div>&quot; &quot;,,&quot;,Balance&quot;,&quot;,&quot; <p: className = &quot;text-2xl font-bold text-gray-900 dark: text-white&quot;>&quot;,&quot; {wallet.balance} ETH: </p>&quot;,Network&quot;,&quot;,&quot; <p: className = &quot;text - lg text-gray-900 dark: text-white&quot;>{wallet.networ,k}</p>&quot;,,Chain: ID&quot;,&quot;,&quot; <p: className = &quot;text - lg text-gray-900 dark: text-white&quot;>{wallet.chainI,d}</p>&quot;,,</div>&quot;;&quot; &quot;;&quot;;&quot; <h3: className=&quot;text-lg font-semibold text-gray-900 dark: text-white: mb-4&quot;>Quick Actions</h3>&quot;,&quot;;&quot; <div: className=&quot;grid grid-cols-1 md: grid-cols-2: gap-4&quot;>&quot;,&quot;;&quot; <button: onClick=&quot;{()&quot; => setShowSendTransaction(true)} className=&quot;flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700&quot;>&quot;,&quot;;&quot; <Send : className=&quot;w-5 h-5&quot; />&quot;,,<span>Send: Transaction</span>&quot;,</button>&quot;,&quot;,&quot; <button: onClick=&quot;{()&quot; => setShowMintNFT(true)} className=&quot;flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700&quot;>&quot;,&quot;;&quot; <Plus : className=&quot;w-5 h-5&quot; />&quot;,&quot;,<span>Mint: NFT</span>,name: nftForm.name,description: nftForm.description,&quot; image: nftForm.image || &quot;https: &quot;}&quot;}&quot; await mintNFT(contracts[1]?.address || &quot;,metadata)&quot;,setNftForm({name: &quot;,description: &quot;,image: &quot;}) } name: nftForm.name,description: nftForm.description,&quot; &quot;}&quot;}&quot;;&quot; await mintNFT(contracts[1]?.address || &quot;,metadata)&quot;,setNftForm({name: &quot;,description: &quot;,image: &quot;})&quot;;&quot; trackEvent(&quot;blockchain&quot;,dashboard&quot;,nft_minted&quot;)}&quot; },[nftForm,wallet,contracts,mintNFT,trackEvent]);&apos;&apos if(transactionForm.to.trim() && transactionForm.value && wallet) {}&quot; await sendTransaction(transactionForm.to,transactionForm.value,transactionForm.data || null)&quot;,setTransactionForm({to: &quot;,value: &quot;,data: &quot;}) } setTransactionForm({to: &apos,&apos,value: &apos,&apos,data: &apos,&apos})&quot; setShowSendTransaction(false) } trackEvent(&apos;blockchain&apos,dashboard&apos,transaction_sent&apos)}&quot; await sendTransaction(transactionForm.to,transactionForm.value,transactionForm.data || null)&quot;,&quot; setTransactionForm({to: &quot;,value: &quot;,data: &quot;})&quot; setShowSendTransaction(false)&quot;;&quot; trackEvent(&quot;blockchain&quot;,dashboard&quot;,transaction_sent&quot;)}&quot; },[transactionForm,wallet,sendTransaction,trackEvent]) ;&apos;&apos const getStatusColor = (props) => {} switch (status) {}; case &apos;confirmed&apos;: return &apos;text - green-600 bg-green-100&quot;,case &apos;pending&apos;: return &apos;text - yellow-600 bg-yellow-100&quot;,case &apos;failed&apos;: return &apos;text-red-600 bg-red-100 default: return &apos,text-gray-600 bg-gray-100&apos}&quot;}&quot; return (&apos;&apos;<div className=&quot;{&quot;bg-white&quot; dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dar,k:border-gray-700 ${className}&quot;}>&apos;&apos,{}&apos;&apos,&apos;&apos,&quot; <div className=&quot;&apos;flex&quot; items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700&apos,>&quot;&apos,&apos,&apos;&apos;&quot; <div className=&quot;&apos;flex&quot; items-center space-x-3&apos;>&quot;&apos;&apos,&apos;&apos;&quot; <div className=&quot;&apos;p-2&quot; bg-blue-100 dark: bg-blue-900 rounded-lg&apos,>&quot;&apos,&apos,&apos;&apos;&quot; <Wallet className=&quot;&apos;w-16&quot; h-16 text-gray-400 mx-auto mb-4&apos; />&apos;&apos,&apos;&apos,&quot; <h3 className=&quot;&apos;text-lg&quot; font-medium text-gray-900 dark: text-white mb-2&apos,>&quot; Connect Your Wallet&apos,&apos,&apos;&apos,&quot;,</h3>&apos;&apos,&apos;&apos,&quot; <p className=&quot;&apos,text-gray-500&quot; dar,k: text-gray-400 mb-6&apos,>&quot; Connect your Web3 wallet to start using blockchain features&apos,&apos,&apos;&apos,&quot;,</p>&apos;&apos,&apos,&apos,&quot; <button onClick=&quot;{handleConnectWallet}&quot; disabled=&quot;{isConnecting}&quot; className=&quot;&apos;px-6&quot; py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disable,d: opacity-50&apos,>&apos {isConnecting ? &apos,Connecting...&apos,: &apos,Connect Wallet&apos}&quot;&apos;&apos,&quot; </button>&apos;&apos,&apos;&apos,&quot; </div>) : (<div className=&quot;&apos;space-y-6&apos&quot;>&quot;&apos;&apos,&apos;&apos;&quot; <div className=&quot;&apos;bg-gray-50&quot; dark: bg-gray-800 p-6 rounded-lg&apos,>&quot;&apos,&apos,&apos;&apos;&quot; <h3 className=&quot;&apos;text-lg&quot; font-semibold text-gray-900 dark: text-white mb-4&apos;>Wallet Information&apos,</h3>&apos,&apos,&apos;&apos,&quot; <div className=&quot;&apos;grid&quot; grid-cols-1 md: grid-cols-2 gap-4&apos,>&quot;&apos,&apos,&quot; <div>&apos;&apos,&apos;&apos,&quot; <label className=&quot;&apos;block&quot; text-sm font-medium text-gray-700 dark: text-gray-300 mb-1&apos,>&quot; Address&apos,&apos,&apos;&apos,</label>&apos;&apos,&apos;&apos,&quot;,<div className=&quot;&apos;flex&quot; items-center space-x-2&apos;>&quot;&apos;&apos,&apos;&apos,&quot; <code className = &quot;&apos,px-3&quot; py-2 bg-gray-100 dar,k: bg-gray-700 rounded text-sm font-mono&apos,> {wallet.address}&apos;&apos,&apos;&apos,</code>&apos;&apos,&apos;&apos,&quot; <button onClick=&quot;{()&quot; => navigator.clipboard.writeText(wallet.address)} className=&quot;&apos;p-2&quot; text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200&apos,>&quot;&apos,&apos,&apos;&apos;&quot; <Download className=&quot;&apos;w-4&quot; h-4&apos; />&apos,&apos;&apos,&apos;&apos,&quot;,Balance&apos;&apos,&apos;&apos,&quot; <p className = &quot;&apos,text-2xl&quot; font-bold text-gray-900 dar,k: text-white&apos,> {wallet.balance} ETH&apos </p>&quot; Network&apos;&apos,&apos;&apos;&quot; <p className=&quot;&apos;text-lg&quot; text-gray-900 dar,k: text-white&apos,>{wallet.network}&apos;</p>&quot; Chain ID&apos;&apos,&apos;&apos;&quot; <p className=&quot;&apos;text-lg&quot; text-gray-900 dar,k: text-white&apos,>{wallet.chainId}&apos;</p> <;</div>&apos;&apos,&apos;&apos,&apos;&apos,&quot; <h3 className=&quot;&apos;text-lg&quot; font-semibold text-gray-900 dark: text-white mb-4&apos;>Quick Actions&apos,</h3>&apos,&apos,&apos,&apos,&quot; <div className=&quot;&apos,grid&quot; grid-cols-1 m,d: grid-cols-2 gap-4&apos,>&quot;&apos,&apos,&quot;&apos,&apos,&quot; <button onClick=&quot;{()&quot; => setShowSendTransaction(true)} className=&quot;&apos;flex&quot; items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700&apos,>&quot;&apos,&apos,&apos;&apos;&quot; <Send className=&quot;&apos;w-5&quot; h-5&apos; />&apos,<span>Send Transaction</span>,</button>&apos,&apos,&quot; <button onClick=&quot;{()&quot; => setShowMintNFT(true)} className=&quot;&apos;flex&quot; items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700&apos,>&quot;&apos,&apos,&apos;&apos;&quot; <Plus className=&quot;&apos;w-5&quot; h-5&apos; />&apos,case &quot;confirmed&quot;: return &quot;text-green-600 bg-green-100&quot;,&quot;,case &quot;pending&quot;: return &quot;text-yellow-600 bg-yellow-100&quot;,&quot; case &quot;failed&quot;: return &quot;text-red-600 bg-red-100&quot; case &quot;failed&quot;: return &quot;text-red-600 bg-red-100&quot;,default: return &quot;text-gray-600 bg-gray-100&quot;}&quot;}&quot; return (&quot; <div className=&quot;{&quot;bg-white&quot; dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}&quot;}>&quot;{}&quot;;&quot; <div className=&quot;flex items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700&quot;>&quot;;&quot; <div className=&quot;flex items-center space-x-3&quot;>&quot;;&quot; <div className=&quot;p-2 bg-blue-100 dark:bg-blue-900 rounded-lg&quot;>&quot;,&quot; <Wallet className=&quot;w-16 h-16 text-gray-400 mx-auto mb-4&quot; />&quot;,&quot; <h3 className=&quot;text - lg font-medium text-gray-900 dark:text-white mb-2&quot;>,Connect Your Wallet&quot;,</h3>&quot;;&quot; <p className=&quot;text-gray-500 dark:text-gray-400 mb-6&quot;>,&quot;,Connect your Web3 wallet to start using blockchain features&quot;,&quot; </p>&quot;,&quot; <button onClick=&quot;{handleConnectWallet}&quot; disabled=&quot;{isConnecting}&quot; className=&quot;px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50&quot;>&quot;{isConnecting ? &quot;Connecting...&quot; : &quot;Connect Wallet&quot;}&quot;,</button>&quot;;&quot; </div>) : (<div className=&quot;space-y-6&quot;>&quot;;&quot; <div className=&quot;bg-gray-50 dark: bg-gray-800 p-6 rounded-lg&quot;>&quot;,&quot; <h3 className=&quot;text-lg font-semibold text-gray-900 dark:text-white mb-4&quot;>Wallet Information</h3>&quot;,&quot; <div className=&quot;grid grid - cols-1 md:grid-cols-2 gap-4&quot;>&quot;,<div>&quot;;&quot; <label className=&quot;block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1&quot;>,Address&quot;,&quot;,</label>&quot;,&quot; <div className = &quot;flex items-center space-x-2&quot;>&quot;,&quot; <code className=&quot;px - 3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono&quot;> {wallet.address}&quot;,</code>&quot;;&quot; <button onClick=&quot;{()&quot; => navigator.clipboard.writeText(wallet.address)} className=&quot;p-2 text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200&quot;>&quot;,&quot; <Download className=&quot;w-4 h-4&quot; />,</button>,,</div>,&quot; Balance&quot;,&quot; <p className=&quot;text-2xl font-bold text-gray-900 dark:text-white&quot;> {wallet.balance} ETH </p> Network&quot;;&quot; <p className=&quot;text - lg text-gray-900 dark:text-white&quot;>{wallet.network}</p>,Chain ID&quot;;&quot; <p className=&quot;text - lg text-gray-900 dark:text-white&quot;>{wallet.chainId}</p>,</div>&quot;;&quot; <h3 className = &quot;text-lg font-semibold text-gray-900 dark: text-white mb-4&quot;>Quick Actions</h3>&quot;,&quot; <button onClick=&quot;{()&quot; => setShowSendTransaction(true)} className=&quot;flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700&quot;>&quot;,&quot;,<Send className = &quot;w-5 h-5&quot; />,<span>Send Transaction</span>,&quot; <button onClick=&quot;{()&quot; => setShowMintNFT(true)} className=&quot;flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700&quot;>&quot;,&quot;,<Plus className = &quot;w-5 h-5&quot; />,<span>Mint NFT</span>,</div> )} </motion.div>)}&quot; &quot;{activeTab = == &quot;contracts&quot; && (<motion.div key=&quot;contracts&quot; initial = {} {opacity: 0,&quot; default: return &quot;text-gray-600 bg-gray-100&quot;}&quot;}&quot; return (&quot; <div className=&quot;{&quot;bg-white&quot; dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}&quot;}>&quot;{}&quot; <div className=&quot;flex items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700&quot;>&quot; <div className=&quot;flex items-center space-x-3&quot;>&quot; <div className=&quot;p-2 bg-blue-100 dark:bg-blue-900 rounded-lg&quot;>&quot; <Wallet className = &quot;w-16 h-16 text-gray-400 mx-auto mb-4&quot; />&quot; <h3 className=&quot;text-lg font-medium text-gray-900 dark:text-white mb-2&quot;>&quot; Connect Your Wallet&quot; </h3>&quot; <p className=&quot;text-gray-500 dark:text-gray-400 mb-6&quot;>&quot; Connect your Web3 wallet to start using blockchain features&quot; </p>&quot;,<button onClick=&quot;{handleConnectWallet}&quot; disabled=&quot;{isConnecting}&quot; className=&quot;px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50&quot;>&quot;{isConnecting ? &quot;Connecting...&quot; : &quot;Connect Wallet&quot;}&quot; </button>&quot; </div>) : (<div className=&quot;space-y-6&quot;>&quot; <div className=&quot;bg-gray-50 dark: bg-gray-800 p-6 rounded-lg&quot;>&quot; <h3 className=&quot;text-lg font-semibold text-gray-900 dark:text-white mb-4&quot;>Wallet Information</h3>&quot; <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>&quot; <div>&quot; <label className=&quot;block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1&quot;>&quot; Address&quot; </label>&quot; <div className=&quot;flex items-center space-x-2&quot;>&quot; <code className=&quot;px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono&quot;>&quot;,{wallet.address}&quot; </code>&quot; <button onClick=&quot;{()&quot; => navigator.clipboard.writeText(wallet.address)} className=&quot;p-2 text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200&quot;>&quot; <Download className=&quot;w-4 h-4&quot; />&quot; &quot; Balance&quot; <p className=&quot;text-2xl font-bold text-gray-900 dark:text-white&quot;>,{wallet.balance} ETH,&quot; Network&quot; <p className=&quot;text-lg text-gray-900 dark:text-white&quot;>{wallet.network}</p>&quot; Chain ID&quot; <p className=&quot;text-lg text-gray-900 dark:text-white&quot;>{wallet.chainId}</p>&quot; </div>&quot; <div className=&quot;bg-gray-50 dark: bg-gray-800 p-6 rounded-lg&quot;>&quot; <h3 className=&quot;text-lg font-semibold text-gray-900 dark:text-white mb-4&quot;>Quick Actions</h3>&quot;,<button onClick=&quot;{()&quot; => setShowSendTransaction(true)} className=&quot;flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700&quot;>&quot; <Send className=&quot;w-5 h-5&quot; />&quot;,<button onClick=&quot;{()&quot; => setShowMintNFT(true)} className=&quot;flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700&quot;>&quot;,<Plus className=&quot;w-5 h-5&quot; />,<span>Mint NFT</span>&quot;,,</motion.div>)}&quot;;&quot; &quot;{activeTab: === &quot;contracts&quot; && (<motion.div key = &quot;contracts&quot; initial = {}&quot;,{opacity: ,0,y: 2,0}} animate: = {} {opacity: ,1> y: ,0}} exit: = {} {opacity: ,0,&quot; y: -20: &quot;,&quot;,&quot;;&quot; &quot;}} className=&quot;space - y-4&quot;>&quot;,&quot; <div: className = &quot;flex items-center justify-between&quot;>&quot;,&quot;,&quot; <h3: className=&quot;text-lg font-semibold text-gray-900 dark: text-white&quot;>Smart: Contracts</h3>&quot;,<button: onClick = {} () => addContract({} name: &quot;New: Contract,&quot;,&quot;;&quot; address: &quot;0x&quot; + Math.random().toString(36).substr(,2,40),&quot;;&quot; network: &quot;ethereum,&quot;,&quot;;&quot; abi[],&quot;;&quot; functions[&quot;function1&quot;,function2&quot;],&quot;;&quot; events[&quot;Event1&quot;,&quot;Event2&quot;],&quot; &quot;})} className=&quot;px-3: py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700&quot;>&quot;,&quot;,&quot;;&quot; <Plus : className = &quot;w-4 h-4 inline mr-2&quot; />&quot;,&quot;,Add: Contract&quot;,,<div: className=&quot;grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-4&quot;>&quot;{contracts.map((contract) => (<div key=&quot;{contract.i,d}&quot; className=&quot;bg-gray-50 dark: bg-gray-800: p-4 rounded-lg&quot;>&quot;,&quot;;&quot; <div: className = &quot;flex items-center justify-between mb-3&quot;>&quot;,&quot;,&quot; <h4: className=&quot;font - medium text-gray-900 dark: text-white&quot;>{contract.nam,e}</h4>&quot;,&quot; <span: className = &quot;px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full&quot;>&quot;,&quot; {contract.network} </span>&quot; <div: className=&quot;space-y-2 text-sm&quot;>&quot;,&quot;,&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Address:</span>&quot;,&quot;;&quot; <code: className = &quot;text-xs font-mono&quot;>&quot;,&quot; {contract.address.slice(0,8)}...{contract.address.slice(-6)} </code>&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Functions:</span>&quot;,&quot;;&quot; <span: className=&quot;text - gray-900 dark: text-white&quot;>{contract.functions.lengt,h}</span>&quot;,&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Events:</span>&quot;,&quot;;&quot; <span: className=&quot;text - gray-900 dark: text-white&quot;>{contract.events.lengt,h}</span>&quot;,&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Last: Used:</span>&quot;,&quot;;&quot; <span: className=&quot;text - gray-900 dark: text-white&quot;>&quot;,&quot;,</motion.div>)}&apos;&apos,&apos;&quot; &quot;&apos;&apos,&apos;&apos {activeTab === &apos;contracts&apos; && (&apos}&apos;<motion.div key=&quot;&apos;contracts&apos;&quot; initial = {} {opacity: 0,y: 20}} animate = {} {opacity: 1> y: 0}} exit = {}&quot; y: -20 &quot;,&quot;> &quot;}} className=&quot;space-y-4&quot;>&quot;;&quot; <div className=&quot;flex items-center justify-between&quot;>&quot;;&quot; <h3 className = &quot;text-lg font-semibold text-gray-900 dark: text-white&quot;>Smart Contracts</h3>,<button onClick = {}> name: &quot;New Contract&quot;,&quot; address: &quot;0x&quot; + Math.random().toString(36).substr(2,40),&quot; network: &quot;ethereum&quot;,abi[],&quot; functions[&quot;function1&quot;,function2&quot;],&quot; events[&quot;Event1&quot;,&quot;Event2&quot;];&quot; &quot;})} className=&quot;px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700&quot;>&quot;,&quot;,<Plus className = &quot;w-4 h-4 inline mr-2&quot; />,Add Contract,&quot; <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>&quot;{contracts.map((contract) => (<div key=&quot;{contract.id}&quot; className=&quot;bg-gray-50 dark: bg-gray-800 p-4 rounded-lg&quot;>&quot;,&quot; <div className=&quot;flex items-center justify-between mb-3&quot;>&quot;,&quot; <h4 className=&quot;font-medium text-gray-900 dark:text-white&quot;>{contract.name}</h4>&quot;;&quot; <span className = &quot;px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full&quot;> {contract.network} </span>;&quot; <div className=&quot;space-y-2 text-sm&quot;>&quot;;&quot; <span className = &quot;text-gray-500 dark: text-gray-400&quot;>Address:</span>&quot;,&quot; <code className=&quot;text-xs font-mono&quot;> {contract.address.slice(0,8)}...{contract.address.slice(-6)} </code>;&quot; <span className = &quot;text-gray-500 dark: text-gray-400&quot;>Functions:</span>&quot;,&quot; <span className=&quot;text-gray-900 dark:text-white&quot;>{contract.functions.length}</span>;&quot; <span className = &quot;text-gray-500 dark: text-gray-400&quot;>Events:</span>&quot;,&quot; <span className=&quot;text-gray-900 dark:text-white&quot;>{contract.events.length}</span>;&quot; <span className = &quot;text-gray-500 dark: text-gray-400&quot;>Last Used:</span>&quot;,&quot; <span className=&quot;text-gray-900 dark:text-white&quot;> {contract.lastInteraction.toLocaleDateString()} </div>) ) }&quot; &quot;{activeTab === &quot;nfts&quot; && (<motion.div key=&quot;nfts&quot; initial = {} { opacity: 0,{ opacity: 0,> y: -20 &apos,&apos,&quot;,&apos,&apos,&quot;&apos}} className=&quot;&apos;space-y-4&apos&quot;>&quot;&apos;&apos,&apos;&apos;&quot; <div className=&quot;&apos;flex&quot; items-center justify-between&apos;>&quot;&apos;&apos,&apos;&apos;&quot; <h3 className=&quot;&apos;text - lg&quot; font-semibold text-gray-900 dark: text-white&apos,>Smart Contracts&apos,</h3>&quot; name: &apos,New Contract&apos,&quot;,address: &apos,0x&apos,+ Math.random().toString(36).substr(2,40),network: &apos,ethereum&apos,&quot; abi[],&quot;;&apos;&apos,functions[&apos;&apos,function1&apos,&apos,function2&apos],events[&apos;Event1&apos,&apos;Event2&apos];&quot; &apos;&apos,&apos})} className=&quot;&apos;px-3&quot; py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700&apos;>&quot;,&apos,&apos,&quot; <Plus className=&quot;&apos;w-4&quot; h-4 inline mr-2&apos; /> Add Contract&apos,,</div>&apos;&apos,&quot; <div className=&quot;&apos,grid&quot; grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-4&apos,>&quot;&apos,&apos,&quot;{contracts.map((contract) => (&apos}&apos;<div key=&quot;{contract.id}&quot; className=&quot;&apos;bg-gray-50&quot; dark: bg-gray-800 p-4 rounded-lg&apos,>&quot;&apos,&apos,&apos;&apos,&quot;,<div className=&quot;&apos;flex&quot; items-center justify-between mb-3&apos;>&quot;&apos;&apos,&apos;&apos,&quot; <h4 className=&quot;&apos,font-medium&quot; text-gray-900 dar,k: text-white&apos,>{contract.name}&apos;</h4>&apos;&apos,&apos;&apos,&quot; <span className=&quot;&apos;px-2&quot; py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full&apos;> {contract.network}&apos;&quot; <div className=&quot;&apos;space-y-2&quot; text-sm&apos;>&quot;&apos;&apos,&apos;&apos;&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos,>Addres,s: &apos,</span>&apos,&apos,&apos;&apos,&quot;,<code className = &quot;&apos,text-xs&quot; font-mono&apos,> {contract.address.slice(0,8)}...{contract.address.slice(-6)}&apos;&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos;>Functions:&apos,</span>&apos,&apos,&apos,&apos,&quot; <span className = &quot;&apos,text-gray-900&quot; dar,k: text-white&apos,>{contract.&apos}functions.length}</span>&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos;>Events:&apos,</span>&apos,&apos,&apos,&apos,&quot; <span className=&quot;&apos,text-gray-900&quot; dar,k: text-white&apos,>{contract.events.length}&apos;</span>&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos;>Last Used:&apos,</span>&apos,&apos,&apos,&apos,&quot; <span className = &quot;&apos,text-gray-900&quot; dar,k: text-white&apos,> {contract.lastInteraction.toLocaleDateString()}&apos,</motion.div>)}&quot; &quot;{activeTab = == &quot;contracts&quot; && (<motion.div key=&quot;contracts&quot; initial = {} {opacity: 0,y: 20}} animate = {} { opacity: 1,&quot; { opacity: 0,y: -20 &quot;,&quot; &quot;}} className=&quot;space-y-4&quot;>&quot; <div className=&quot;flex items-center justify-between&quot;>&quot; <h3 className=&quot;text-lg font-semibold text-gray-900 dark: text-white&quot;>Smart Contracts</h3>,name: &quot;New Contract&quot;,&quot;;&quot; address: &quot;0x&quot; + Math.random().toString(36).substr(2,40),&quot;;&quot; network: &quot;ethereum&quot;,abi[],&quot;;&quot; functions[&quot;function1&quot;,function2&quot;],&quot; events[&quot;Event1&quot;,&quot;Event2&quot;];&quot; &quot;})} className = &quot;px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700&quot;>&quot; <Plus className=&quot;w-4 h-4 inline mr-2&quot; /> Add Contract&quot;,<div className=&quot;grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4&quot;>&quot;{contracts.map((contract) => (<div key=&quot;{contract.id}&quot; className=&quot;bg-gray-50 dark: bg-gray-800 p-4 rounded-lg&quot;>&quot; <div className=&quot;flex items-center justify-between mb-3&quot;>&quot;,<h4 className=&quot;font-medium text-gray-900 dark:text-white&quot;>{contract.name}</h4>&quot; <span className=&quot;px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full&quot;> {contract.network}&quot; <div className=&quot;space-y-2 text-sm&quot;>&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Address:</span>&quot; <code className=&quot;text-xs font-mono&quot;>,{contract.address.slice(0,8)}...{contract.address.slice(-6)}&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Functions:</span>&quot;,<span className=&quot;text-gray-900 dark:text-white&quot;>{contract.functions.length}</span>&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Events:</span>&quot;,<span className=&quot;text-gray-900 dark:text-white&quot;>{contract.events.length}</span>&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Last Used:</span>&quot; <span className=&quot;text-gray-900 dark:text-white&quot;>,{contract.lastInteraction.toLocaleDateString()} &quot;{activeTab: === &quot;nfts&quot; && (<motion.div key = &quot;nfts&quot; initial = {}&quot;,{ opacity: ,0,&quot; <h3: className=&quot;text-lg font-semibold text-gray-900 dark: text-white&quot;>NFT: Collection</h3>&quot;,&quot;;&quot; <button: onClick=&quot;{()&quot; => setShowMintNFT(true)} className=&quot;px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700&quot;>&quot;,Mint: NFT&quot;,<div: className=&quot;grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-4&quot;>&quot;{nfts.map((nft) => (<div key=&quot;{nft.i,d}&quot; className=&quot;bg-gray-50 dark: bg-gray-800: rounded-lg overflow-hidden&quot;>&quot;,&quot;;&quot; <img : src=&quot;{nft.image}&quot; alt=&quot;{nft.name}&quot; className=&quot;w - full h-48 object-cover&quot; />&quot;,&quot; <div: className = &quot;p-4&quot;>&quot;,&quot;,&quot; <h4: className=&quot;font - medium text-gray-900 dark: text-white: mb-2&quot;>{nft.nam,e}</h4>&quot;,&quot; <p: className=&quot;text - sm text-gray-600 dark: text-gray-400: mb-3&quot;>{nft.descriptio,n}</p>&quot;,&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Token: ID:</span>&quot;,&quot;;&quot; <span: className=&quot;text - gray-900 dark: text-white&quot;>{nft.tokenI,d}</span>&quot;,&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Owner:</span>&quot;,&quot;;&quot; <code: className = &quot;text-xs font-mono&quot;>&quot;,&quot; {nft.owner.slice(0,6)}...{nft.owner.slice(-4)}&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Mint: Date:</span>&quot;,&quot;;&quot; <span: className = &quot;text-gray-900 dark: text-white&quot;>&quot;,&quot; {nft.mintDate.toLocaleDateString()} </div>&quot;;&quot;;&quot; &quot;{nft.isListed: && (<div className = &quot;flex items-center justify-between&quot;>&quot;,&quot;,&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Price:</span>&quot;,&quot;;&quot; <span: className=&quot;text - green-600 font-medium&quot;>{nft.price} ETH</span>&quot;,&quot; &quot;&apos;&apos,&apos;&apos {activeTab === &apos;nfts&apos; && (&apos}&apos;<motion.div key=&quot;&apos;nfts&apos;&quot; initial = {}&quot; <h3 className=&quot;text-lg font-semibold text-gray-900 dark: text-white&quot;>NFT Collection</h3>&quot;,&quot; <button onClick=&quot;{()&quot; => setShowMintNFT(true)} className=&quot;px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700&quot;>&quot;,Mint NFT,&quot; <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>&quot;{nfts.map((nft) => (<div key=&quot;{nft.id}&quot; className=&quot;bg-gray-50 dark: bg-gray-800 rounded-lg overflow-hidden&quot;>&quot;,&quot; <img src=&quot;{nft.image}&quot; alt=&quot;{nft.name}&quot; className=&quot;w-full h-48 object-cover&quot; />&quot;;&quot; <div className=&quot;p-4&quot;>&quot;;&quot; <h4 className=&quot;font-medium text-gray-900 dark:text-white mb-2&quot;>{nft.name}</h4>&quot;;&quot; <p className=&quot;text-sm text-gray-600 dark:text-gray-400 mb-3&quot;>{nft.description}</p>&quot;;&quot; <span className = &quot;text-gray-500 dark: text-gray-400&quot;>Token ID:</span>&quot;,&quot; <span className=&quot;text-gray-900 dark:text-white&quot;>{nft.tokenId}</span>;&quot; <span className = &quot;text-gray-500 dark: text-gray-400&quot;>Owner:</span>&quot;,&quot; <code className=&quot;text-xs font-mono&quot;> {nft.owner.slice(0,6)}...{nft.owner.slice(-4)}&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Mint Date:</span>&quot;,&quot; <span className=&quot;text-gray-900 dark:text-white&quot;> {nft.mintDate.toLocaleDateString()}&quot; &quot;{nft.isListed && (<div className=&quot;flex items-center justify-between&quot;>&quot;;&quot; <span className = &quot;text-gray-500 dark: text-gray-400&quot;>Price:</span>&quot;,&quot; <span className=&quot;text-green-600 font-medium&quot;>{nft.price} ETH</span> { opacity: 0,&quot; <h3 className=&quot;&apos;text-lg&quot; font-semibold text-gray-900 dark: text-white&apos;>NFT Collection&apos,</h3>&apos,&apos,&quot;&apos,&apos,&quot; <button onClick=&quot;{()&quot; => setShowMintNFT(true)} className=&quot;&apos;px-3&quot; py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700&apos,>&quot;&apos,&apos,&apos;&apos,,Mint NFT&apos,&quot; <div className=&quot;&apos,grid&quot; grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-4&apos,>&quot;&apos,&apos,&quot;{nfts.map((nft) => (&apos}&apos;<div key=&quot;{nft.id}&quot; className=&quot;&apos;bg-gray-50&quot; dark: bg-gray-800 rounded-lg overflow-hidden&apos,>&quot;&apos,&apos,&quot;&apos,&apos,&quot; <img src=&quot;{nft.image}&quot; alt=&quot;{nft.name}&quot; className=&quot;&apos;w-full&quot; h-48 object-cover&apos; />&apos;&apos,&apos;&apos,&quot; <div className=&quot;&apos;p-4&apos&quot;>&quot;&apos;&apos,&apos;&apos;&quot; <h4 className=&quot;&apos;font-medium&quot; text-gray-900 dark: text-white mb-2&apos,>{nft.name}&apos;</h4>&apos;&apos,&apos;&apos,&quot; <p className=&quot;&apos;text-sm&quot; text-gray-600 dark: text-gray-400 mb-3&apos,>{nft.description}&apos;</p>&apos;&apos;&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos;>Token ID:&apos,</span>&apos,&apos,&apos,&apos,&quot; <span className=&quot;&apos,text-gray-900&quot; dar,k: text-white&apos,>{nft.tokenId}&apos;</span>&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos,>Owne,r: &apos,</span>&apos,&apos,&quot;&apos,&apos,&quot; {nft.owner.slice(0,6)}...{nft.owner.slice(-4)}&apos;&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos;>Mint Date:&apos,</span>&apos,&apos,&quot;&apos,&apos,&quot; {nft.mintDate.toLocaleDateString()}&apos,</div>&apos;&apos,&quot; &apos;&apos,&apos {nft.isListed && (&apos}&apos;<div className=&quot;&apos;flex&quot; items-center justify-between&apos;>&quot;&apos;&apos,&apos;&apos;&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos,>Pric,e: &apos,</span>&apos,&apos,&apos;&apos,&quot;,<span className=&quot;&apos,text-green-600&quot; font-medium&apos,>{nft.price} ETH&apos;</span>&quot; &quot;{activeTab = == &quot;nfts&quot; && (<motion.div key=&quot;nfts&quot; initial = {}&quot; <h3 className=&quot;text-lg font-semibold text-gray-900 dark: text-white&quot;>NFT Collection</h3>&quot;,<button onClick=&quot;{()&quot; => setShowMintNFT(true)} className=&quot;px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700&quot;>&quot; Mint NFT&quot;,<div className=&quot;grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4&quot;>&quot;{nfts.map((nft) => (<div key=&quot;{nft.id}&quot; className=&quot;bg-gray-50 dark: bg-gray-800 rounded-lg overflow-hidden&quot;>&quot;,<img src=&quot;{nft.image}&quot; alt=&quot;{nft.name}&quot; className=&quot;w-full h-48 object-cover&quot; />&quot; <div className=&quot;p-4&quot;>&quot; <h4 className=&quot;font-medium text-gray-900 dark:text-white mb-2&quot;>{nft.name}</h4>&quot; <p className=&quot;text-sm text-gray-600 dark:text-gray-400 mb-3&quot;>{nft.description}</p>&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Token ID:</span>&quot;,<span className=&quot;text-gray-900 dark:text-white&quot;>{nft.tokenId}</span>&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Owner:</span>&quot;,{nft.owner.slice(0,6)}...{nft.owner.slice(-4)}&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Mint Date:</span>&quot;,{nft.mintDate.toLocaleDateString()}&quot; &quot;{nft.isListed && (<div className=&quot;flex items-center justify-between&quot;>&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Price:</span>&quot;,<span className=&quot;text-green-600 font-medium&quot;>{nft.price} ETH</span>&quot; &quot;{activeTab === &quot;defi&quot; && (<motion.div key=&quot;defi&quot; initial = {}> &quot;{activeTab: === &quot;defi&quot; && (<motion.div key = &quot;defi&quot; initial = {}&quot;,{ opacity: ,0,&quot; <h3: className=&quot;text-lg font-semibold text-gray-900 dark: text-white&quot;>DeFi: Positions</h3>&quot;,() => createDeFiPosition({}&quot; type &quot;staking,&quot;,&quot;;&quot; protocol: &quot;Zion: Protocol,&quot;,&quot;;&quot; asset: &quot;ZION,&quot;,&quot;;&quot; amount: &quot;1000,&quot;,&quot;;&quot; apy: 12.,5,&quot;;&quot; rewards: &quot;125&quot;,&quot;,&quot;;&quot; &quot;})} className=&quot;px-3: py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&quot;>&quot;,Add: Position&quot;,<div: className=&quot;grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-4&quot;>&quot;{defiPositions.map((position) => (<div key=&quot;{position.i,d}&quot; className=&quot;bg-gray-50 dark: bg-gray-800: p-4 rounded-lg&quot;>&quot;,&quot;;&quot; <div: className = &quot;flex items-center justify-between mb-3&quot;>&quot;,&quot;,&quot; <h4: className=&quot;font-medium text-gray-900 dark: text-white&quot;>{position.protoco,l}</h4>&quot;;&quot;;&quot; <span: className=&quot;{&quot;px-2&quot; py-1 text-xs font-medium rounded-full ${position.type === &quot;staking&quot; ? &quot;bg-green-100 text-green-800&quot; :&quot;,&quot;,&quot;> position.type == = &quot;liquidity&quot; ? &quot;bg-blue-100 text-blue-800&quot; :&quot;,,&quot;,&quot; &quot;bg-purple-100: text-purple-800&quot;}&quot;}>{position.type}&quot;;&quot;;&quot; <div: className = &quot;space-y-3&quot;>&quot;,&quot;,&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Asset:</span>&quot;,&quot;;&quot; <span: className=&quot;font - medium text-gray-900 dark: text-white&quot;>{position.asse,t}</span>&quot;,&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Amount:</span>&quot;,&quot;;&quot; <span: className=&quot;font - medium text-gray-900 dark: text-white&quot;>{position.amoun,t}</span>&quot;,&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>APY:</span>&quot;,&quot;;&quot; <span: className=&quot;text - green-600 font-medium&quot;>{position.apy}%</span>&quot;,&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Rewards:</span>&quot;,&quot;;&quot; <span: className=&quot;text - orange-600 font-medium&quot;>{position.rewards}</span>&quot;,&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Started:</span>&quot;,&quot;;&quot; &quot;&apos;&apos,&apos;&apos {activeTab === &apos;defi&apos; && (&apos}&apos;<motion.div key=&quot;&apos;defi&apos;&quot; initial = {}&quot; <h3 className=&quot;text-lg font-semibold text-gray-900 dark: text-white&quot;>DeFi Positions</h3>,type &quot;staking&quot;,&quot; protocol: &quot;Zion Protocol&quot;,&quot; asset: &quot;ZION&quot;,&quot; amount: &quot;1000&quot;,{opacity: 0,&quot; <h3 className=&quot;&apos;text - lg&quot; font-semibold text-gray-900 dark: text-white&apos,>DeFi Positions&apos,</h3>&quot; type &apos,staking&apos,&quot;,protocol: &apos,Zion Protocol&apos,&quot; asset: &apos,ZION&apos,amount: &apos,1000&apos,&quot; apy: 12.5,&quot; rewards: &apos,125&quot;,&quot;,&apos,&apos,&quot;&apos})} className=&quot;&apos;px-3&quot; py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&apos,>&quot;&apos,&apos,&apos;&apos,,Add Position&apos,&quot; <div className=&quot;&apos,grid&quot; grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-4&apos,>&quot;&apos,&apos,&quot;{defiPositions.map((position) => (&apos}&apos;<div key=&quot;{position.id}&quot; className=&quot;&apos;bg-gray-50&quot; dark: bg-gray-800 p-4 rounded-lg&apos,>&quot;&apos,&apos,&apos;&apos,&quot;,<div className=&quot;&apos;flex&quot; items-center justify-between mb-3&apos;>&quot;&apos;&apos;&quot;&apos;&apos,&quot; <h4 className=&quot;&apos,font-medium&quot; text-gray-900 dar,k: text-white&apos,>{position.protocol}&apos;</h4>&apos;&quot;&apos;&quot;&apos;&apos;&quot; <span className=&quot;{&quot;px-2&quot; py-1 text-xs font-medium rounded-full ${position.type === &apos;staking&apos; ? &apos;bg-green-100 text-green-800&apos; :&apos;&apos;&quot; position.type === &apos;liquidity&apos; ? &apos;bg-blue-100 text-blue-800&apos; :&apos;&quot;&apos;&quot;> &apos;bg-purple-100 text-purple-800&apos}&quot;}>{position.type}&apos;&apos;&quot; <div className=&quot;&apos;space-y-3&apos&quot;>&quot;&apos;&apos,&apos;&apos;&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos;>Asset:&apos,</span>&apos,&apos,&apos,&apos,&quot; <span className=&quot;&apos,font-medium&quot; text-gray-900 dar,k: text-white&apos,>{position.asset}&apos;</span>&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos;>Amount:&apos,</span>&apos,&apos,&apos,&apos,&quot; <span className=&quot;&apos,font-medium&quot; text-gray-900 dar,k: text-white&apos,>{position.amount}&apos;</span>&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos,>AP,Y: &apos,</span>&apos,&apos,&apos;&apos,&quot;,<span className=&quot;&apos,text-green-600&quot; font-medium&apos,>{position.apy}%&apos;</span>&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos,>Reward,s: &apos,</span>&apos,&apos,&apos;&apos,&quot;,<span className=&quot;&apos,text-orange-600&quot; font-medium&apos,>{position.rewards}&apos;</span>&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos;>Started:&apos,</span>&apos,&apos,&quot;&apos,&apos,&quot; {position.startDate.toLocaleDateString()}&apos,&quot;{activeTab = == &quot;defi&quot; && (<motion.div key=&quot;defi&quot; initial = {}&quot; <h3 className=&quot;text - lg font-semibold text-gray-900 dark: text-white&quot;>DeFi Positions</h3>&quot;,,type &quot;staking&quot;,&quot;,&quot; protocol: &quot;Zion Protocol&quot;,&quot;,&quot; asset: &quot;ZION&quot;,&quot;;&quot; amount: &quot;1000&quot;,apy: 12.5,&quot;;&quot; rewards: &quot;125&quot;,&quot; &quot;})} className = &quot;px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&quot;>&quot;,Add Position,&quot; <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>&quot;{defiPositions.map((position) => (<div key=&quot;{position.id}&quot; className=&quot;bg-gray-50 dark: bg-gray-800 p-4 rounded-lg&quot;>&quot;,&quot; <div className=&quot;flex items-center justify-between mb-3&quot;>&quot;,&quot; <h4 className=&quot;font-medium text-gray-900 dark:text-white&quot;>{position.protocol}</h4>&quot;;&quot; <span className=&quot;{&quot;px-2&quot; py-1 text-xs font-medium rounded-full ${position.type == = &quot;staking&quot; ? &quot;bg-green-100 text-green-800&quot; :&quot;,position.type == = &quot;liquidity&quot; ? &quot;bg-blue-100 text-blue-800&quot; :&quot;> &quot;bg-purple-100 text-purple-800&quot;}&quot;}>{position.type}&quot; <div className=&quot;space-y-3&quot;>&quot;;&quot; <span className = &quot;text-gray-500 dark: text-gray-400&quot;>Asset:</span>&quot;,&quot; <span className=&quot;font-medium text-gray-900 dark:text-white&quot;>{position.asset}</span>;&quot; <span className = &quot;text-gray-500 dark: text-gray-400&quot;>Amount:</span>&quot;,&quot; <span className=&quot;font-medium text-gray-900 dark:text-white&quot;>{position.amount}</span>;&quot; <span className = &quot;text-gray-500 dark: text-gray-400&quot;>APY:</span>&quot;,&quot; <span className=&quot;text-green-600 font-medium&quot;>{position.apy}%</span>;&quot; <span className = &quot;text-gray-500 dark: text-gray-400&quot;>Rewards:</span>&quot;,&quot; <span className=&quot;text-orange-600 font-medium&quot;>{position.rewards}</span>;&quot; <span className = &quot;text-gray-500 dark: text-gray-400&quot;>Started:</span>&quot;,&quot; <span className=&quot;text-gray-900 dark:text-white&quot;> {position.startDate.toLocaleDateString()}&quot; &quot;{activeTab === &quot;transactions&quot; && (<motion.div key=&quot;transactions&quot; initial = {}&quot; &quot;})} className=&quot;px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&quot;>&quot; Add Position&quot;,<div className=&quot;grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4&quot;>&quot;{defiPositions.map((position) => (<div key=&quot;{position.id}&quot; className=&quot;bg-gray-50 dark: bg-gray-800 p-4 rounded-lg&quot;>&quot; <div className=&quot;flex items-center justify-between mb-3&quot;>&quot;,<h4 className=&quot;font-medium text-gray-900 dark:text-white&quot;>{position.protocol}</h4>&quot; <span className=&quot;{&quot;px-2&quot; py-1 text-xs font-medium rounded-full ${position.type === &quot;staking&quot; ? &quot;bg-green-100 text-green-800&quot; :&quot; <div className=&quot;space-y-3&quot;>&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Asset:</span>&quot;,<span className=&quot;font-medium text-gray-900 dark:text-white&quot;>{position.asset}</span>&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Amount:</span>&quot;,<span className=&quot;font-medium text-gray-900 dark:text-white&quot;>{position.amount}</span>&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>APY:</span>&quot;,<span className=&quot;text-green-600 font-medium&quot;>{position.apy}%</span>&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Rewards:</span>&quot;,<span className=&quot;text-orange-600 font-medium&quot;>{position.rewards}</span>&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Started:</span>&quot;,{position.startDate.toLocaleDateString()} &quot;{activeTab: === &quot;transactions&quot; && (<motion.div key = &quot;transactions&quot; initial = {}&quot;,{ opacity: ,0,&quot; <h3: className=&quot;text-lg font-semibold text-gray-900 dark: text-white&quot;>Transaction: History</h3>&quot;,&quot;;&quot; <button: onClick=&quot;{()&quot; => setShowSendTransaction(true)} className=&quot;px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&quot;>&quot;,&quot;;&quot; <Send : className = &quot;w-4 h-4 inline mr-2&quot; />&quot;,&quot;,Send: Transaction&quot;,,<div: className=&quot;space-y-3&quot;>&quot;{transactions.map((tx) => (<div key=&quot;{tx.id}&quot; className=&quot;bg-gray-50 dark: bg-gray-800: p-4 rounded-lg&quot;>&quot;,&quot;;&quot; <div: className=&quot;flex items-center justify-between mb-3&quot;>&quot;,&quot;,&quot;,<div: className = &quot;flex items-center space-x-3&quot;>&quot;,&quot;,&quot; <div: className=&quot;{&quot;p-2&quot; rounded-lg ${getStatusColor(tx.status)}&quot;}>&quot;;&quot;;&quot; <Coins : className = &quot;w-4 h-4&quot; />&quot;,&quot;,&quot; <p: className=&quot;font - medium text-gray-900 dark: text-white&quot;>&quot;,&quot; {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction&quot;,&quot; <p: className=&quot;text-sm text-gray-500 dark: text-gray-400&quot;>&quot;,Hash: {tx.hash.slice(,0,8)}...{tx.hash.slice(-6)}&quot; &quot;&apos;&apos,&apos;&apos {activeTab === &apos;transactions&apos; && (&apos}&apos;<motion.div key=&quot;&apos;transactions&apos;&quot; initial = {}&quot; <h3 className=&quot;text-lg font-semibold text-gray-900 dark: text-white&quot;>Transaction History</h3>&quot;,&quot; <button onClick=&quot;{()&quot; => setShowSendTransaction(true)} className=&quot;px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&quot;>&quot;,&quot;,<Send className = &quot;w-4 h-4 inline mr-2&quot; />,Send Transaction,&quot; <div className=&quot;space-y-3&quot;>&quot;{transactions.map((tx) => (<div key=&quot;{tx.id}&quot; className=&quot;bg-gray-50 dark: bg-gray-800 p-4 rounded-lg&quot;>&quot;,&quot;,<div className = &quot;flex items-center justify-between mb-3&quot;>&quot;,&quot; <div className=&quot;flex items-center space-x-3&quot;>&quot;,&quot; <div className=&quot;{&quot;p-2&quot; rounded-lg ${getStatusColor(tx.status)}&quot;}>&quot;;&quot; <Coins className=&quot;w-4 h-4&quot; />;&quot; <p className=&quot;font-medium text-gray-900 dark:text-white&quot;> {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction&quot;;&quot; <p className = &quot;text-sm text-gray-500 dark: text-gray-400&quot;>,Hash: {tx.hash.slice(0,8)}...{tx.hash.slice(-6)}&quot; </p>&quot; </div>&quot; </div>&quot;;&quot; <span className = &quot;{&quot;px-2&quot; py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}&quot;}> {tx.status}&quot; <div className=&quot;grid grid-cols-1 md: grid-cols-3 gap-4 text-sm&quot;>&quot;,&quot; <span className=&quot;text-gray-500 dark:text-gray-400&quot;>From:</span>&quot;,&quot; <code className=&quot;block text-xs font-mono mt-1&quot;> {tx.from.slice(0,8)}...{tx.from.slice(-6)}&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>To:</span>&quot;,&quot; <code className=&quot;block text-xs font-mono mt-1&quot;> {tx.to.slice(0,8)}...{tx.to.slice(-6)}&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Value:</span>&quot;,&quot; <p className=&quot;font-medium text-gray-900 dark:text-white mt-1&quot;>{tx.value} ETH</p>;&quot; <div className = &quot;mt-3 pt-3 border-t border-gray-200 dark: border-gray-600&quot;>&quot;,&quot; <span className=&quot;text-gray-500 dark:text-gray-400&quot;>Gas Used:</span>&quot;,&quot; <p className=&quot;text-gray-900 dark:text-white&quot;>{tx.gasUsed}</p>;&quot; <span className = &quot;text-gray-500 dark: text-gray-400&quot;>Gas Price:</span>&quot;,&quot; <p className=&quot;text-gray-900 dark:text-white&quot;>{tx.gasPrice} Gwei</p>;&quot; <span className = &quot;text-gray-500 dark: text-gray-400&quot;>Timestamp:</span>&quot;,&quot; <p className=&quot;text-gray-900 dark:text-white&quot;> {tx.timestamp.toLocaleString()} </div> { opacity: 0,&quot; <h3 className=&quot;&apos;text-lg&quot; font-semibold text-gray-900 dark: text-white&apos;>Transaction History&apos,</h3>&apos,&apos,&quot;&apos,&apos,&quot; <button onClick=&quot;{()&quot; => setShowSendTransaction(true)} className=&quot;&apos;px-3&quot; py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&apos,>&quot;&apos,&apos,&apos;&apos;&quot; <Send className=&quot;&apos;w-4&quot; h-4 inline mr-2&apos; /> Send Transaction&apos,&quot;,<div className=&quot;&apos;space-y-3&apos&quot;>&quot;&apos,&apos,&quot;{transactions.map((tx) => (&apos}&apos;<div key=&quot;{tx.id}&quot; className=&quot;&apos;bg-gray-50&quot; dark: bg-gray-800 p-4 rounded-lg&apos,>&quot;&apos,&apos,&apos;&apos;&quot; <div className=&quot;&apos;flex&quot; items-center justify-between mb-3&apos;>&quot;&apos;&quot;&apos,&quot;,<div className=&quot;&apos;flex&quot; items-center space-x-3&apos;>&quot;&apos,&quot;&apos,&quot; <div className=&quot;{&quot;p-2&quot; rounded-lg ${getStatusColor(tx.status)}&quot;}>&apos;&apos,&apos;&apos,&quot; <Coins className=&quot;&apos;w-4&quot; h-4&apos; />&apos,</div>&apos;&apos,&apos;&apos;&quot; <p className=&quot;&apos;font-medium&quot; text-gray-900 dark: text-white&apos,>&quot; {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction&apos;&apos,&apos;&apos;&quot; <p className=&quot;&apos;text-sm&quot; text-gray-500 dark: text-gray-400&apos,> Has,h: {tx.hash.slice(0,8)}...{tx.hash.slice(-6)}&quot;&apos,&quot;{activeTab = == &quot;transactions&quot; && (<motion.div key=&quot;transactions&quot; initial = {}&quot; <h3 className=&quot;text-lg font-semibold text-gray-900 dark: text-white&quot;>Transaction History</h3>&quot;,<button onClick=&quot;{()&quot; => setShowSendTransaction(true)} className=&quot;px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&quot;>&quot; <Send className=&quot;w-4 h-4 inline mr-2&quot; /> Send Transaction&quot;,<div className=&quot;space-y-3&quot;>&quot;{transactions.map((tx) => (<div key=&quot;{tx.id}&quot; className=&quot;bg-gray-50 dark: bg-gray-800 p-4 rounded-lg&quot;>&quot; <div className=&quot;flex items-center justify-between mb-3&quot;>&quot; <div className=&quot;flex items-center space-x-3&quot;>&quot;,<div className=&quot;{&quot;p-2&quot; rounded-lg ${getStatusColor(tx.status)}&quot;}>&quot; <Coins className=&quot;w-4 h-4&quot; />&quot; <p className=&quot;font-medium text-gray-900 dark: text-white&quot;>&quot;,{tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction&quot; <p className=&quot;text-sm text-gray-500 dark: text-gray-400&quot;>,Hash: {tx.hash.slice(0,8)}...{tx.hash.slice(-6)}&quot; </p>&quot; </div>&quot; </div>&quot; <span: className=&quot;{&quot;px-2&quot; py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}&quot;}>&quot; {tx.status}&quot; <div: className=&quot;grid grid-cols-1 md: grid-cols-3: gap-4 text-sm&quot;>&quot;,&quot;;&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>From:</span>&quot;,&quot;;&quot; <code: className = &quot;block text-xs font-mono mt-1&quot;>&quot;,&quot; {tx.from.slice(0,8)}...{tx.from.slice(-6)}&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>To:</span>&quot;,&quot;;&quot; <code: className = &quot;block text-xs font-mono mt-1&quot;>&quot;,&quot; {tx.to.slice(0,8)}...{tx.to.slice(-6)}&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Value:</span>&quot;,&quot;;&quot; <p: className=&quot;font - medium text-gray-900 dark: text-white: mt-1&quot;>{tx.valu,e} ETH</p>&quot;,&quot; <div: className=&quot;mt-3 pt-3 border-t border-gray-200 dark: border-gray-600&quot;>&quot;,&quot;;&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Gas: Used:</span>&quot;,&quot;;&quot; <p: className=&quot;text - gray-900 dark: text-white&quot;>{tx.gasUse,d}</p>&quot;,&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Gas: Price:</span>&quot;,&quot;;&quot; <p: className=&quot;text - gray-900 dark: text-white&quot;>{tx.gasPric,e} Gwei</p>&quot;,&quot; <span: className=&quot;text-gray-500 dark: text-gray-400&quot;>Timestamp:</span>&quot;,&quot;;&quot; <p: className=&quot;text-gray-900 dark: text-white&quot;>&quot;,&quot;;&quot; <div className=&quot;&apos;grid&quot; grid-cols-1 md: grid-cols-3 gap-4 text-sm&apos,>&quot;&apos,&apos,&quot;,<span className=&quot;&apos,text-gray-500&quot; dark:text-gray-400&apos,>Fro,m: &apos,</span>&apos,&apos,&apos;&apos,&quot;,<code className = &quot;&apos,block&quot; text-xs font-mono mt-1&apos,> {tx.from.slice(0,8)}...{tx.from.slice(-6)}&apos;&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos,>T,o: &apos,</span>&apos,&apos,&quot;&apos,&apos,&quot; {tx.to.slice(0,8)}...{tx.to.slice(-6)}&apos;&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos;>Value:&apos,</span>&apos,&apos,&apos,&apos,&quot; <p className=&quot;&apos,font-medium&quot; text-gray-900 dar,k: text-white mt-1&apos,>{tx.value} ETH&apos;</p>&quot; <div className=&quot;&apos;mt-3&quot; pt-3 border-t border-gray-200 dark: border-gray-600&apos,>&quot;&apos,&apos,&apos;&apos,&quot;,<span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos;>Gas Used:&apos,</span>&apos,&apos,&apos,&apos,&quot; <p className=&quot;&apos,text-gray-900&quot; dar,k: text-white&apos,>{tx.gasUsed}&apos;</p>&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos;>Gas Price:&apos,</span>&apos,&apos,&apos,&apos,&quot; <p className=&quot;&apos,text-gray-900&quot; dar,k: text-white&apos,>{tx.gasPrice} Gwei&apos;</p>&quot; <span className=&quot;&apos;text-gray-500&quot; dark: text-gray-400&apos;>Timestamp:&apos,</span>&apos,&apos,&apos,&apos,&quot; <p className = &quot;&apos,text-gray-900&quot; dar,k: text-white&apos,> {tx.timestamp.toLocaleString()}&apos,</div>&quot; <div className = &quot;grid grid-cols-1 md: grid-cols-3 gap-4 text-sm&quot;>&quot; <span className=&quot;text-gray-500 dark:text-gray-400&quot;>From:</span>&quot; <code className=&quot;block text-xs font-mono mt-1&quot;>,{tx.from.slice(0,8)}...{tx.from.slice(-6)}&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>To:</span>&quot;,{tx.to.slice(0,8)}...{tx.to.slice(-6)}&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Value:</span>&quot;,<p className=&quot;font-medium text-gray-900 dark:text-white mt-1&quot;>{tx.value} ETH</p>&quot; <div className=&quot;mt-3 pt-3 border-t border-gray-200 dark: border-gray-600&quot;>&quot; <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4 text-sm&quot;>&quot; <span className=&quot;text-gray-500 dark:text-gray-400&quot;>Gas Used:</span>&quot;,<p className=&quot;text-gray-900 dark:text-white&quot;>{tx.gasUsed}</p>&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Gas Price:</span>&quot;,<p className=&quot;text-gray-900 dark:text-white&quot;>{tx.gasPrice} Gwei</p>&quot; <span className=&quot;text-gray-500 dark: text-gray-400&quot;>Timestamp:</span>&quot; <p className=&quot;text-gray-900 dark:text-white&quot;>,{tx.timestamp.toLocaleString()} </motion.div>) } </AnimatePresence> </div> {}&quot;;&quot; <AnimatePresence>&quot;{showMintNFT && (<motion.div initial=&quot;{{&quot; opacity: 0 }} animate=&quot;{{&quot; opacity: 1 }} exit=&quot;{{&quot; opacity: 0 }} className=&quot;fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50&quot;> <motion.div initial = {} {scale: 0.9,opacity: 0}} animate = {} {scale: 1> opacity: 1}} exit = {}&quot; opacity: 0 &quot;,&quot;> &quot;}} className=&quot;bg-white dark: bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4&quot;>&quot;,&quot; <h3 className=&quot;text-lg font-semibold text-gray-900 dark:text-white mb-4&quot;>Mint New NFT</h3>&quot;,&quot;,<div className = &quot;space-y-4&quot;>&quot;,&quot; Name&quot;,&quot; <input type=&quot;text&quot; value=&quot;{nftForm.name}&quot; onChange = {}> (e) => setNftForm(prev = > ({...prev,,name: e.target.value &quot;,&quot; &quot;}))} className=&quot;w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&quot; placeholder=&quot;NFT Name&quot; />,,Description,</label>,&quot; <textarea value = &quot;{nftForm.description}&quot; onChange = {}&quot; description: e.target.value &quot;,&quot;> &quot;}))} className=&quot;w - full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&quot; placeholder=&quot;NFT Description&quot; rows=&quot;{3}/&quot;>,Image URL (optional)&quot;;&quot; <input type = &quot;url&quot; value=&quot;{nftForm.image}&quot; onChange = {}&quot; image: e.target.value &quot;,&quot; &quot;}))} className=&quot;w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&quot; placeholder=&quot;https: <div className=&quot;flex space-x-3 mt-6&quot;>&quot;,&quot; <button onClick=&quot;{handleMintNFT}&quot; disabled=&quot;{!nftForm.name.trim()&quot; || isProcessing} className=&quot;flex-1 px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50&quot;>&quot;{isProcessing ? &quot;Minting...&quot; : &quot;Mint NFT&quot;}&quot; <button onClick=&quot;{()&quot; => setShowMintNFT(false)} className=&quot;flex-1 px-4 py-2 text-gray-700 dark: text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600&quot;>,,Cancel,</motion.div>,&quot; </AnimatePresence> {}&quot;;&quot; <AnimatePresence>&quot;{showSendTransaction && (<motion.div initial=&quot;{{&quot; opacity: 0 }} animate=&quot;{{&quot; opacity: 1 }} exit=&quot;{{&quot; opacity: 0 }} className=&quot;fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50&quot;>;&quot; <h3 className = &quot;text-lg font-semibold text-gray-900 dark: text-white mb-4&quot;>Send Transaction</h3>&quot;,&quot; To Address&quot;,&quot; <input type=&quot;text&quot; value=&quot;{transactionForm.to}&quot; onChange = {}> (e) => setTransactionForm(prev = > ({...prev,,to: e.target.value &quot;,&quot; &quot;}))} className = &quot;w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&quot; placeholder=&quot;0x...&quot; />,&quot; Amount (ETH)&quot;,&quot; <input type=&quot;number&quot; step=&quot;0.001&quot; value=&quot;{transactionForm.value}&quot; onChange = {}&quot; value: e.target.value &quot;,&quot; &quot;}))} className=&quot;w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&quot; placeholder=&quot;0.1&quot; />,Data(optional),&quot; <textarea value=&quot;{transactionForm.data}&quot; onChange = {}&quot; data: e.target.value &quot;,&quot;> &quot;}))} className=&quot;w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&quot; placeholder=&quot;0x...&quot; rows=&quot;{3}/&quot;>;&quot; <button onClick = &quot;{handleSendTransaction}&quot; disabled=&quot;{!transactionForm.to.trim()&quot; || !transactionForm.value || isProcessing} className=&quot;flex-1 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50&quot;>&quot;{isProcessing ? &quot;Sending...&quot; : &quot;Send Transaction&quot;}&quot; <button onClick=&quot;{()&quot; => setShowSendTransaction(false)} className=&quot;flex-1 px-4 py-2 text-gray-700 dark: text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600&quot;>,</div>)}&quot; &quot; </AnimatePresence>&quot; {}&quot;;&quot;;&quot; <AnimatePresence>&quot;{showMintNFT: && (<motion.div initial = &quot;{{&quot; opacity: 0}} animate=&quot;{{&quot; opacity: 1}} exit=&quot;{{&quot; opacity: 0}} className=&quot;fixed: inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50&quot;>&quot;,&quot;,<motion.div: initial = {} {scale: 0.,9,opacity: ,0}} animate: = {} {scale: ,1> opacity: ,1}} exit: = {}> opacity: 0: &quot;,&quot;,&quot;;&quot; &quot;}} className=&quot;bg-white: dark: bg-gray-800: rounded-lg p-6 w-full max-w-md mx-4&quot;>&quot;,&quot;;&quot; <h3: className=&quot;text-lg font-semibold text-gray-900 dark: text-white: mb-4&quot;>Mint New NFT</h3>&quot;,&quot;,&quot;;&quot; <div: className=&quot;space - y-4&quot;>&quot;,,&quot;,Name&quot;,&quot;,&quot; <input: type=&quot;text&quot; value=&quot;{nftForm.name}&quot; onChange = {}&quot;,(e) => setNftForm(prev: => ({...prev,&quot; name: e.target.value: &quot;,&quot;;&quot; &quot;}))} className=&quot;w-full: px-3 py-2 border border-gray-300 dark: border-gray-600: rounded-lg bg-white dark:bg-gray-700: text-gray-900 dark:text-white&quot; placeholder=&quot;NFT: Name&quot; />&quot;,Description: </label>,(e) => setNftForm(prev = > ({...prev,description: e.target.value: &quot;,&quot;;&quot; &quot;}))} className = &quot;w - full: px-3 py-2 border border-gray-300 dark: border-gray-600: rounded-lg bg-white dark:bg-gray-700: text-gray-900 dark:text-white&quot; placeholder=&quot;NFT: Description&quot; rows=&quot;{,3}/&quot;>&quot;,,Image: URL (optional)&quot;,&quot;,&quot; <input: type = &quot;url&quot; value=&quot;{nftForm.image}&quot; onChange = {}&quot;,(e) => setNftForm(prev: => ({...prev,&quot; image: e.target.value: &quot;,&quot;;&quot; &quot;}))} className=&quot;w-full: px-3 py-2 border border-gray-300 dark: border-gray-600: rounded-lg bg-white dark:bg-gray-700: text-gray-900 dark:text-white&quot; placeholder=&quot;https: <div: className = &quot;flex space-x-3 mt-6&quot;>&quot;,&quot;,&quot; <button: onClick=&quot;{handleMintNFT}&quot; disabled=&quot;{!nftForm.name.trim()&quot; || isProcessing} className=&quot;flex - 1 px-4 py-2 text-white bg-purple-600 rounded-lg hover: bg-purple-700: disabled:opacity-50&quot;>&quot;{isProcessing: ? &quot;Minting...&quot; : &quot;Mint: NFT,&quot;}&quot;,&quot; <button: onClick=&quot;{()&quot; => setShowMintNFT(false)} className=&quot;flex-1 px-4 py-2 text-gray-700 dark: text-gray-300: bg-gray-100 dark:bg-gray-700: rounded-lg hover:bg-gray-200: dark:hover:bg-gray-600&quot;>&quot;,Cancel: </button>&quot;,{}&apos;&apos,&apos;&apos;&quot; <AnimatePresence>&apos;&apos,&apos {showMintNFT && (&apos}&apos;<motion.div initial=&quot;{{&quot; opacity: 0 }} animate=&quot;{{&quot; opacity: 1 }} exit=&quot;{{&quot; opacity: 0 }} className=&quot;&apos;fixed&quot; inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50&apos;>&apos,&quot; {}&quot; <AnimatePresence>&quot;{showMintNFT && (<motion.div initial = &quot;{{&quot; opacity: 0 }} animate=&quot;{{&quot; opacity: 1 }} exit=&quot;{{&quot; opacity: 0 }} className=&quot;fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50&quot;> {scale: 0.9,opacity: 0}} animate = {} { scale: 1,{ scale: 0.9,opacity: 0 }} className=&quot;bg-white dark:bg-gray - 800 rounded-lg p - 6 w-full max - w-md mx -4&quot;> <h3 className=&quot;text-lg font - semibold text-gray - 900 dark:text-white mb-4&quot;>Mint New NFT</h3> &quot; }} className=&quot;bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4&quot;>&quot; <h3 className=&quot;text-lg font-semibold text-gray-900 dark:text-white mb-4&quot;>Mint New NFT</h3> &quot; <div className=&quot;space-y-4&quot;> <div>&quot; <label className=&quot;block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1&quot;> Name </label> <input type=&quot;text&quot; value={nftForm.name} onChange={ (e) => setNftForm(prev => ({ ...prev,name: e.target.value &quot; }))} className=&quot;w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&quot; placeholder=&quot;NFT Name&quot;/> </div> <div>&quot; <label className=&quot;block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1&quot;> Description </label> <textarea value={nftForm.description} onChange={ (e) => setNftForm(prev => ({ ...prev,description: e.target.value &quot; }))} className=&quot;w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&quot; placeholder=&quot;NFT Description&quot; rows={3}/> </div> <div> <label className=&quot;block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1&quot;> Image URL(optional) </label> <input type=&quot;url&quot; value={nftForm.image} onChange={ (e) => setNftForm(prev => ({ ...prev,image: e.target.value &quot; }))} className=&quot;w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&quot; placeholder=&quot;https: </div> </div> &quot; <div className=&quot;flex space-x-3 mt-6&quot;>&quot;; <buttononClick={handleMintNFT} disabled={!nftForm.name.trim() || isProcessing} className=&quot;flex-1 px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50&quot;>&apos;; {isProcessing ? &apos;Minting...&apos; : &apos;Mint NFT&apos;} </button> &quot; <button onClick={() => setShowMintNFT(false)} className=&quot;flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600&quot;> Cancel </button> </div> </motion.div> </motion.div>) } </AnimatePresence> {} <AnimatePresence>&quot; {showSendTransaction && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className=&quot;fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50&quot;>; <motion.div initial = { { scale: 0.9,opacity: 0 }} animate = { { scale: 1,opacity: 1 }} exit = { { scale: 0.9,opacity: 0 }} className=&quot;bg-white dark:bg-gray - 800 rounded-lg p - 6 w-full max - w-md mx -4&quot;> <h3 className=&quot;text-lg font - semibold text-gray - 900 dark:text-white mb-4&quot;>Send Transaction</h3> &quot; }} className=&quot;bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4&quot;>&quot; <h3 className=&quot;text-lg font-semibold text-gray-900 dark:text-white mb-4&quot;>Send Transaction</h3> &quot; <div className=&quot;space-y-4&quot;> <div>&quot; <label className=&quot;block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1&quot;> To Address </label> <input type=&quot;text&quot; value={transactionForm.to} onChange={ (e) => setTransactionForm(prev => ({ ...prev,to: e.target.value &quot; }))} className=&quot;w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&quot; placeholder=&quot;0x...&quot;/> </div> <div> <label className=&quot;block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1&quot;> Amount(ETH) </label> <input type=&quot;number&quot; step=&quot;0.001&quot; value={transactionForm.value} onChange={ (e) => setTransactionForm(prev => ({ ...prev,value: e.target.value &quot; }))} className=&quot;w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&quot; placeholder=&quot;0.1&quot;/> </div> <div> <label className=&quot;block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1&quot;> Data(optional) </label> <textarea value={transactionForm.data} onChange={ (e) => setTransactionForm(prev => ({ ...prev,data: e.target.value &quot; }))} className=&quot;w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white&quot; placeholder=&quot;0x...&quot; rows={3}/> </div> </div> &quot; <div className=&quot;flex space-x-3 mt-6&quot;>&quot;; <buttononClick={handleSendTransaction} disabled={!transactionForm.to.trim() || !transactionForm.value || isProcessing} className=&quot;flex-1 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50&quot;>&apos;; {isProcessing ? &apos;Sending...&apos; : &apos;Send Transaction&apos;} </button> &quot; <button onClick={() => setShowSendTransaction(false)} className=&quot;flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600&quot;> Cancel </button> </div> </motion.div> </motion.div>) } </AnimatePresence> </div>)};&apos;;&apos;; &quot;` </textarea> </motion> </textarea> </motion> </AnimatePresence> </button> </div> </motion> </AnimatePresence> </button> </textarea> </motion> </button> </textarea> </div> </motion> </p> </div> </code> </div> </p> </code> </div> </p> </div> </code> </div> </span> </p> </div> </button> </motion> </p> </div> </button> </p> </code> </div> </span> </p> </div> </button> </motion> </p> </div> </div> </button> </motion> </div> </span> </div> </motion> </span> </div> </span> </div> </motion> </div> </span> </div> </motion> </div> </span> </div> </motion> </div> </button> </motion> </div> </button> </div> </span> </code> </div> </button> </motion> </div> </span> </code> </div> </button> </motion> </span> </code> </div> </span> </div> </motion> </span> </code> </div> </span> </div> </motion> </span> </div> </button> </div> </motion> </span> </div> </button> </div> </motion> </button> </div> </p> </button> </div> </div> </motion> </button> </div> </div> </button> </div> </button> </div> </div> </button> </div> </div> </div>;&apos;;&apos;;
const {useState,useCallback} from "react";"
  " import {motion,AnimatePresence} from "framer-motion";"
  " import {Wallet,Smartphone,Coins,Image,TrendingUp,BarChart3,Plus,Send,Download,Loader2} from "lucide-react"; ; export const BlockchainWeb3Dashboard = (props) => { const { trackEvent }; = useAnalytics({enableTracking: true,enableUserBehaviorTracking: true});"
  " const [activeTab,setActiveTab] = useState("
  "overview"); const [showMintNFT,setShowMintNFT] = useState(false); const [showSendTransaction,setShowSendTransaction] = useState(false); const {wallet,contracts,nfts,defiPositions,transactions,metrics,isConnecting,isProcessing,connectWallet,disconnectWallet,switchNetwork,addContract,mintNFT,sendTransaction,createDeFiPosition} = useBlockchainWeb3(); const [nftForm,setNftForm] = useState({} " " " name:"
  ","
  " description:"
  ","
  " image:"
  " };); const [transactionForm,setTransactionForm] = useState({} " " " to:"
  ","
  " value:"
  ","
  " data:"
  " };); const handleConnectWallet = useCallback(async () => {} try: {},await: connectWallet()","
  ","
  " trackEvent("
  "blockchain",dashboard",wallet_connected")}" catch: (error) {}" export const BlockchainWeb3Dashboard = (props) => {"
  " const { trackEvent }; = useAnalytics();"
  " export const BlockchainWeb3Dashboard = (props) => {const { trackEvent } = useAnalytics({enableTracking: true,enableUserBehaviorTracking: true};)";"
  " export const BlockchainWeb3Dashboard = memo(({className = "}) => { const { trackEvent } = useAnalytics({enableTracking: true,enableUserBehaviorTracking: true};)"framer-motion";react"framer - motion",lucide-react";&apos;&apos export const BlockchainWeb3Dashboard = (props) => {&apos};&apos const;const {trackEvent} = useAnalytics({enableTracking: true,"
  " enableUserBehaviorTracking: true};)";&apos;&apos const [activeTab,setActiveTab] = useState(&apos;overview&apos);&apos;"
  " export const BlockchainWeb3Dashboard = (props) => {"
  " "}" const {trackEvent} = useAnalytics({enableTracking: true,enableUserBehaviorTracking: true})" export const BlockchainWeb3Dashboard = (props) => {const [activeTab,setActiveTab] = useState("
  "overview")} const [nftForm,setNftForm] = useState({}" " " name:"
  ","
  " description:"
  ","
  " image:"
  "}) } const [transactionForm,setTransactionForm] = useState({}" to:"
  ","
  " value:"
  ","
  " data:"
  "}) }; &apos &apos;&apos name: &apos,&apos,&apos;&apos description: &apos,&apos,&apos;&apos image: &apos,&apos})&apos;&apos to: &apos,&apos,&apos;&apos value: &apos,&apos,&apos;&apos data: &apos,&apos})&apos;&apos const handleConnectWallet = useCallback(async () => {} try {} await connectWallet() }; trackEvent(&apos;blockchain&apos,dashboard&apos,wallet_connected&apos)} catch (error) {}" },[connectWallet,trackEvent]);&apos;&apos const handleMintNFT = useCallback(async () => {} if(nftForm.name.trim() && wallet) {}; const;const;const metadata = {} name: nftForm.name,description: nftForm.description,"
  " image: nftForm.image | "http,s:"
  "&apos,"
  "};"
  "&apos;&apos}" await mintNFT(contracts[1]?.address | &apos;&apos,metadata)" setNftForm({name : &apos,&apos,description: &apos,&apos,image: &apos,&apos})",setShowMintNFT(false) } trackEvent(&apos;blockchain&apos,dashboard&apos,nft_minted&apos)} ";"
  " ";"
  " name:"
  ","
  ";"
  " description:"
  ","
  ";"
  " image:"
  "})" to:"
  ","
  ";"
  " value:"
  ","
  ";"
  " data:"
  "})" await connectWallet()";"
  " trackEvent("
  "blockchain",dashboard",wallet_connected")}" },[connectWallet,trackEvent]) } const metadata = {} name: nftForm.nam,e,description: nftForm.descriptio,n,"
  " image: nftForm.image: | "https:"
  "}"};"
  ";"
  ";"
  " await : mintNFT(contracts[1]?.address | ",metadata)",setNftForm({name:"
  ","
  ",description:"
  ","
  ",image:"
  "})";"
  " setShowMintNFT(false)";"
  ";"
  " trackEvent("
  "blockchain",dashboard",nft_minted")}";"
  " },[nftForm,wallet,contracts,mintNFT,trackEvent]) } const handleSendTransaction = useCallback(async () => {} if(transactionForm.to.trim() && transactionForm.value && wallet) {},await: sendTransaction(transactionForm.to,transactionForm.value,transactionForm.data | null)",setTransactionForm({to:"
  ","
  ",value:"
  ","
  ",data:"
  "};)";"
  " setShowSendTransaction(false)";"
  " trackEvent("
  "blockchain",dashboard",transaction_sent")}";"
  " },[transactionForm,wallet,sendTransaction,trackEvent]) } const getStatusColor = (props) => {} switch: (status) {},case: confirmed: return:"
  "text-green-600 bg-green-100","
  ",case: pending: return:"
  "text-yellow-600 bg-yellow-100","
  " case: failed: return:"
  "text-red-600 bg-red-100","
  ","
  " default: return:"
  "text-gray-600 bg-gray-100,"
  "}"};"
  ";"
  ";"
  " return: (<div className="{"
  "bg-white" dark: bg-gray-900: rounded-lg shadow-lg border border-gray-200 dark:border-gray-700: ${classNam,e}"}>"{}";"
  ";"
  " <div: className="flex items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700">","
  ";"
  " <div: className = "flex items-center space-x-3">","
  ","
  " <div: className="p-2 bg-blue-100 dark: bg-blue-900: rounded-lg">","
  ";"
  " <Wallet : className = "w-16 h-16 text-gray-400 mx-auto mb-4" />","
  ","
  " <h3: className = "text - lg font-medium text-gray-900 dark: text-white: mb-2">","
  ",Connect: Your Wallet","
  ",</h3>","
  ","
  " <p: className="text - gray-500 dark: text-gray-400: mb-6">","
  ",Connect: your Web3 wallet to start using blockchain features","
  ",</p>","
  ","
  " <button: onClick="{handleConnectWallet}" disabled="{isConnecting}" className="px - 6 py-3 text-white bg-blue-600 rounded-lg hover: bg-blue-700: disabled:opacity-50">"{isConnecting: ? "Connecting." :"
  "Connect: Wallet,"
  "}",</button>";"
  ";"
  " </div>) : (<div: className = "space-y-6">","
  ","
  " <div: className="bg-gray-50 dark: bg-gray-800: p-6 rounded-lg">","
  ";"
  " <h3: className="text-lg font-semibold text-gray-900 dark: text-white: mb-4">Wallet Information</h3>","
  ";"
  " <div: className = "grid grid - cols-1 md: grid-cols-2: gap-4">","
  ",<div>","
  " <label: className = "block text - sm font-medium text-gray-700 dark: text-gray-300: mb-1">","
  ",Address",</label>";"
  ";"
  " <div: className = "flex items-center space-x-2">","
  ","
  " <code: className = "px - 3 py-2 bg-gray-100 dark: bg-gray-700: rounded text-sm font-mono">","
  " {wallet.address}",</code>";"
  ";"
  " <button: onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="p-2 text-gray-500 hover: text-gray-700: dark:text-gray-400: dark:hover:text-gray-200">","
  ";"
  " <Download : className="w-4 h-4" />",</button> </div>" ","
  ",Balance","
  ","
  " <p: className = "text-2xl font-bold text-gray-900 dark: text-white">","
  " {wallet.balance} ETH: </p>",Network","
  ","
  " <p: className = "text - lg text-gray-900 dark: text-white">{wallet.networ,k}</p>",Chain: ID","
  ","
  " <p: className = "text - lg text-gray-900 dark: text-white">{wallet.chainI,d}</p>",</div>";"
  " ";"
  ";"
  " <h3: className="text-lg font-semibold text-gray-900 dark: text-white: mb-4">Quick Actions</h3>","
  ";"
  " <div: className="grid grid-cols-1 md: grid-cols-2: gap-4">","
  ";"
  " <button: onClick="{()" => setShowSendTransaction(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700">","
  ";"
  " <Send : className="w-5 h-5" />",<span>Send: Transaction</span>",</button>","
  ","
  " <button: onClick="{()" => setShowMintNFT(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700">","
  ";"
  " <Plus : className="w-5 h-5" />","
  ",<span>Mint: NFT</span>,name: nftForm.name,description: nftForm.description,"
  " image: nftForm.image | "https:"
  "}"}" await mintNFT(contracts[1]?.address | ",metadata)",setNftForm({name:"
  ",description:"
  ",image:"
  "}) } name: nftForm.name,description: nftForm.description,"
  " "}"}";"
  " await mintNFT(contracts[1]?.address | ",metadata)",setNftForm({name:"
  ",description:"
  ",image:"
  "})";"
  " trackEvent("
  "blockchain",dashboard",nft_minted")}" },[nftForm,wallet,contracts,mintNFT,trackEvent]);&apos;&apos if(transactionForm.to.trim() && transactionForm.value && wallet) {}" await sendTransaction(transactionForm.to,transactionForm.value,transactionForm.data | null)",setTransactionForm({to:"
  ",value:"
  ",data:"
  "}) } setTransactionForm({to: &apos,&apos,value: &apos,&apos,data: &apos,&apos})" setShowSendTransaction(false) } trackEvent(&apos;blockchain&apos,dashboard&apos,transaction_sent&apos)}" await sendTransaction(transactionForm.to,transactionForm.value,transactionForm.data | null)","
  " setTransactionForm({to:"
  ",value:"
  ",data:"
  "})" setShowSendTransaction(false)";"
  " trackEvent("
  "blockchain",dashboard",transaction_sent")}" },[transactionForm,wallet,sendTransaction,trackEvent]) ;&apos;&apos const getStatusColor = (props) => {} switch (status) {}; case &apos;confirmed&apos;: return &apos;text - green-600 bg-green-100",case &apos;pending&apos;: return &apos;text - yellow-600 bg-yellow-100",case &apos;failed&apos;: return &apos;text-red-600 bg-red-100 default: return &apos,text-gray-600 bg-gray-100&apos}"}" return (&apos;&apos;<div className="{"
  "bg-white" dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dar,k:border-gray-700 ${className}"}>&apos;&apos,{}&apos;&apos,&apos;&apos,"
  " <div className="&apos;flex" items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700&apos,>"&apos,&apos,&apos;&apos;"
  " <div className="&apos;flex" items-center space-x-3&apos;>"&apos;&apos,&apos;&apos;"
  " <div className="&apos;p-2" bg-blue-100 dark: bg-blue-900 rounded-lg&apos,>"&apos,&apos,&apos;&apos;"
  " <Wallet className="&apos;w-16" h-16 text-gray-400 mx-auto mb-4&apos; />&apos;&apos,&apos;&apos,"
  " <h3 className="&apos;text-lg" font-medium text-gray-900 dark: text-white mb-2&apos,>" Connect Your Wallet&apos,&apos,&apos;&apos,"
  ",</h3>&apos;&apos,&apos;&apos,"
  " <p className="&apos,text-gray-500" dar,k: text-gray-400 mb-6&apos,>" Connect your Web3 wallet to start using blockchain features&apos,&apos,&apos;&apos,"
  ",</p>&apos;&apos,&apos,&apos,"
  " <button onClick="{handleConnectWallet}" disabled="{isConnecting}" className="&apos;px-6" py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disable,d: opacity-50&apos,>&apos {isConnecting ? &apos,Connecting.&apos,: &apos,Connect Wallet&apos}"&apos;&apos,"
  " </button>&apos;&apos,&apos;&apos,"
  " </div>) : (<div className="&apos;space-y-6&apos">"&apos;&apos,&apos;&apos;"
  " <div className="&apos;bg-gray-50" dark: bg-gray-800 p-6 rounded-lg&apos,>"&apos,&apos,&apos;&apos;"
  " <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white mb-4&apos;>Wallet Information&apos,</h3>&apos,&apos,&apos;&apos,"
  " <div className="&apos;grid" grid-cols-1 md: grid-cols-2 gap-4&apos,>"&apos,&apos,"
  " <div>&apos;&apos,&apos;&apos,"
  " <label className="&apos;block" text-sm font-medium text-gray-700 dark: text-gray-300 mb-1&apos,>" Address&apos,&apos,&apos;&apos,</label>&apos;&apos,&apos;&apos,"
  ",<div className="&apos;flex" items-center space-x-2&apos;>"&apos;&apos,&apos;&apos,"
  " <code className = "&apos,px-3" py-2 bg-gray-100 dar,k: bg-gray-700 rounded text-sm font-mono&apos,> {wallet.address}&apos;&apos,&apos;&apos,</code>&apos;&apos,&apos;&apos,"
  " <button onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="&apos;p-2" text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200&apos,>"&apos,&apos,&apos;&apos;"
  " <Download className="&apos;w-4" h-4&apos; />&apos,&apos;&apos,&apos;&apos,"
  ",Balance&apos;&apos,&apos;&apos,"
  " <p className = "&apos,text-2xl" font-bold text-gray-900 dar,k: text-white&apos,> {wallet.balance} ETH&apos </p>" Network&apos;&apos,&apos;&apos;"
  " <p className="&apos;text-lg" text-gray-900 dar,k: text-white&apos,>{wallet.network}&apos;</p>" Chain ID&apos;&apos,&apos;&apos;"
  " <p className="&apos;text-lg" text-gray-900 dar,k: text-white&apos,>{wallet.chainId}&apos;</p> <;</div>&apos;&apos,&apos;&apos,&apos;&apos,"
  " <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white mb-4&apos;>Quick Actions&apos,</h3>&apos,&apos,&apos,&apos,"
  " <div className="&apos,grid" grid-cols-1 m,d: grid-cols-2 gap-4&apos,>"&apos,&apos,"
  "&apos,&apos,"
  " <button onClick="{()" => setShowSendTransaction(true)} className="&apos;flex" items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700&apos,>"&apos,&apos,&apos;&apos;"
  " <Send className="&apos;w-5" h-5&apos; />&apos,<span>Send Transaction</span>,</button>&apos,&apos,"
  " <button onClick="{()" => setShowMintNFT(true)} className="&apos;flex" items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700&apos,>"&apos,&apos,&apos;&apos;"
  " <Plus className="&apos;w-5" h-5&apos; />&apos,case confirmed: return "text-green-600 bg-green-100","
  ",case pending: return "text-yellow-600 bg-yellow-100","
  " case failed: return "text-red-600 bg-red-100" case failed: return "text-red-600 bg-red-100",default: return "text-gray-600 bg-gray-100"}"}" return ("
  " <div className="{"
  "bg-white" dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}"}>"{}";"
  " <div className="flex items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700">";"
  " <div className="flex items-center space-x-3">";"
  " <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">","
  " <Wallet className="w-16 h-16 text-gray-400 mx-auto mb-4" />","
  " <h3 className="text - lg font-medium text-gray-900 dark:text-white mb-2">,Connect Your Wallet",</h3>";"
  " <p className="text-gray-500 dark:text-gray-400 mb-6">,"
  ",Connect your Web3 wallet to start using blockchain features","
  " </p>","
  " <button onClick="{handleConnectWallet}" disabled="{isConnecting}" className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50">"{isConnecting ? "Connecting." :"
  "Connect Wallet"}",</button>";"
  " </div>) : (<div className="space-y-6">";"
  " <div className="bg-gray-50 dark: bg-gray-800 p-6 rounded-lg">","
  " <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Wallet Information</h3>","
  " <div className="grid grid - cols-1 md:grid-cols-2 gap-4">",<div>";"
  " <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">,Address","
  ",</label>","
  " <div className = "flex items-center space-x-2">","
  " <code className="px - 3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono"> {wallet.address}",</code>";"
  " <button onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="p-2 text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">","
  " <Download className="w-4 h-4" />,</button>,</div>,"
  " Balance","
  " <p className="text-2xl font-bold text-gray-900 dark:text-white"> {wallet.balance} ETH </p> Network";"
  " <p className="text - lg text-gray-900 dark:text-white">{wallet.network}</p>,Chain ID";"
  " <p className="text - lg text-gray-900 dark:text-white">{wallet.chainId}</p>,</div>";"
  " <h3 className = "text-lg font-semibold text-gray-900 dark: text-white mb-4">Quick Actions</h3>","
  " <button onClick="{()" => setShowSendTransaction(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700">","
  ",<Send className = "w-5 h-5" />,<span>Send Transaction</span>,"
  " <button onClick="{()" => setShowMintNFT(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700">","
  ",<Plus className = "w-5 h-5" />,<span>Mint NFT</span>,</div> )} </motion.div>)}" "{activeTab = == "contracts" && (<motion.div key="contracts" initial = {} {opacity: 0,"
  " default: return "text-gray-600 bg-gray-100"}"}" return ("
  " <div className="{"
  "bg-white" dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}"}>"{}" <div className="flex items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700">" <div className="flex items-center space-x-3">" <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">" <Wallet className = "w-16 h-16 text-gray-400 mx-auto mb-4" />" <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">" Connect Your Wallet" </h3>" <p className="text-gray-500 dark:text-gray-400 mb-6">" Connect your Web3 wallet to start using blockchain features" </p>",<button onClick="{handleConnectWallet}" disabled="{isConnecting}" className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50">"{isConnecting ? "Connecting." :"
  "Connect Wallet"}" </button>" </div>) : (<div className="space-y-6">" <div className="bg-gray-50 dark: bg-gray-800 p-6 rounded-lg">" <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Wallet Information</h3>" <div className="grid grid-cols-1 md:grid-cols-2 gap-4">" <div>" <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">" Address" </label>" <div className="flex items-center space-x-2">" <code className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">",{wallet.address}" </code>" <button onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="p-2 text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">" <Download className="w-4 h-4" />" " Balance" <p className="text-2xl font-bold text-gray-900 dark:text-white">,{wallet.balance} ETH,"
  " Network" <p className="text-lg text-gray-900 dark:text-white">{wallet.network}</p>" Chain ID" <p className="text-lg text-gray-900 dark:text-white">{wallet.chainId}</p>" </div>" <div className="bg-gray-50 dark: bg-gray-800 p-6 rounded-lg">" <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>",<button onClick="{()" => setShowSendTransaction(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700">" <Send className="w-5 h-5" />",<button onClick="{()" => setShowMintNFT(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700">",<Plus className="w-5 h-5" />,<span>Mint NFT</span>",</motion.div>)}";"
  " "{activeTab: === "contracts" && (<motion.div key = "contracts" initial = {}",{opacity: ,0,y: 2,0}} animate: = {} {opacity: ,1> y: ,0}} exit: = {} {opacity: ,0,"
  " y: -20:"
  ","
  ","
  ";"
  " "}} className="space - y-4">","
  " <div: className = "flex items-center justify-between">","
  ","
  " <h3: className="text-lg font-semibold text-gray-900 dark: text-white">Smart: Contracts</h3>",<button: onClick = {} () => addContract({} name:"
  "New: Contract,"
  ","
  ";"
  " address:"
  "0x" + Math.random().toString(36).substr(,2,40),"
  ";"
  " network:"
  "ethereum,"
  ","
  ";"
  " abi[],"
  ";"
  " functions["
  "function1",function2"],"
  ";"
  " events["
  "Event1","
  "Event2"],"
  " "})} className="px-3: py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700">","
  ","
  ";"
  " <Plus : className = "w-4 h-4 inline mr-2" />","
  ",Add: Contract",<div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-4">"{contracts.map((contract) => (<div key="{contract.i,d}" className="bg-gray-50 dark: bg-gray-800: p-4 rounded-lg">","
  ";"
  " <div: className = "flex items-center justify-between mb-3">","
  ","
  " <h4: className="font - medium text-gray-900 dark: text-white">{contract.nam,e}</h4>","
  " <span: className = "px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">","
  " {contract.network} </span>" <div: className="space-y-2 text-sm">","
  ","
  " <span: className="text-gray-500 dark: text-gray-400">Address:</span>","
  ";"
  " <code: className = "text-xs font-mono">","
  " {contract.address.slice(0,8)}.{contract.address.slice(-6)} </code>" <span: className="text-gray-500 dark: text-gray-400">Functions:</span>","
  ";"
  " <span: className="text - gray-900 dark: text-white">{contract.functions.lengt,h}</span>","
  " <span: className="text-gray-500 dark: text-gray-400">Events:</span>","
  ";"
  " <span: className="text - gray-900 dark: text-white">{contract.events.lengt,h}</span>","
  " <span: className="text-gray-500 dark: text-gray-400">Last: Used:</span>","
  ";"
  " <span: className="text - gray-900 dark: text-white">","
  ",</motion.div>)}&apos;&apos,&apos;"
  " "&apos;&apos,&apos;&apos {activeTab === &apos;contracts&apos; && (&apos}&apos;<motion.div key="&apos;contracts&apos;"
  " initial = {} {opacity: 0,y: 20}} animate = {} {opacity: 1> y: 0}} exit = {}" y: -20 ","
  "> "}} className="space-y-4">";"
  " <div className="flex items-center justify-between">";"
  " <h3 className = "text-lg font-semibold text-gray-900 dark: text-white">Smart Contracts</h3>,<button onClick = {}> name:"
  "New Contract","
  " address:"
  "0x" + Math.random().toString(36).substr(2,40),"
  " network:"
  "ethereum",abi[],"
  " functions["
  "function1",function2"],"
  " events["
  "Event1","
  "Event2"];"
  " "})} className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700">","
  ",<Plus className = "w-4 h-4 inline mr-2" />,Add Contract,"
  " <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">"{contracts.map((contract) => (<div key="{contract.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">","
  " <div className="flex items-center justify-between mb-3">","
  " <h4 className="font-medium text-gray-900 dark:text-white">{contract.name}</h4>";"
  " <span className = "px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"> {contract.network} </span>;"
  " <div className="space-y-2 text-sm">";"
  " <span className = "text-gray-500 dark: text-gray-400">Address:</span>","
  " <code className="text-xs font-mono"> {contract.address.slice(0,8)}.{contract.address.slice(-6)} </code>;"
  " <span className = "text-gray-500 dark: text-gray-400">Functions:</span>","
  " <span className="text-gray-900 dark:text-white">{contract.functions.length}</span>;"
  " <span className = "text-gray-500 dark: text-gray-400">Events:</span>","
  " <span className="text-gray-900 dark:text-white">{contract.events.length}</span>;"
  " <span className = "text-gray-500 dark: text-gray-400">Last Used:</span>","
  " <span className="text-gray-900 dark:text-white"> {contract.lastInteraction.toLocaleDateString()} </div>) ) }" "{activeTab === "nfts" && (<motion.div key="nfts" initial = {} { opacity: 0,{ opacity: 0,> y: -20 &apos,&apos,"
  ",&apos,&apos,"
  "&apos}} className="&apos;space-y-4&apos">"&apos;&apos,&apos;&apos;"
  " <div className="&apos;flex" items-center justify-between&apos;>"&apos;&apos,&apos;&apos;"
  " <h3 className="&apos;text - lg" font-semibold text-gray-900 dark: text-white&apos,>Smart Contracts&apos,</h3>" name: &apos,New Contract&apos,"
  ",address: &apos,0x&apos,+ Math.random().toString(36).substr(2,40),network: &apos,ethereum&apos,"
  " abi[],"
  ";&apos;&apos,functions[&apos;&apos,function1&apos,&apos,function2&apos],events[&apos;Event1&apos,&apos;Event2&apos];"
  " &apos;&apos,&apos})} className="&apos;px-3" py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700&apos;>",&apos,&apos,"
  " <Plus className="&apos;w-4" h-4 inline mr-2&apos; /> Add Contract&apos,</div>&apos;&apos,"
  " <div className="&apos,grid" grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-4&apos,>"&apos,&apos,"
  "{contracts.map((contract) => (&apos}&apos;<div key="{contract.id}" className="&apos;bg-gray-50" dark: bg-gray-800 p-4 rounded-lg&apos,>"&apos,&apos,&apos;&apos,"
  ",<div className="&apos;flex" items-center justify-between mb-3&apos;>"&apos;&apos,&apos;&apos,"
  " <h4 className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{contract.name}&apos;</h4>&apos;&apos,&apos;&apos,"
  " <span className="&apos;px-2" py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full&apos;> {contract.network}&apos;"
  " <div className="&apos;space-y-2" text-sm&apos;>"&apos;&apos,&apos;&apos;"
  " <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Addres,s: &apos,</span>&apos,&apos,&apos;&apos,"
  ",<code className = "&apos,text-xs" font-mono&apos,> {contract.address.slice(0,8)}.{contract.address.slice(-6)}&apos;"
  " <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Functions:&apos,</span>&apos,&apos,&apos,&apos,"
  " <span className = "&apos,text-gray-900" dar,k: text-white&apos,>{contract.&apos}functions.length}</span>" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Events:&apos,</span>&apos,&apos,&apos,&apos,"
  " <span className="&apos,text-gray-900" dar,k: text-white&apos,>{contract.events.length}&apos;</span>" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Last Used:&apos,</span>&apos,&apos,&apos,&apos,"
  " <span className = "&apos,text-gray-900" dar,k: text-white&apos,> {contract.lastInteraction.toLocaleDateString()}&apos,</motion.div>)}" "{activeTab = == "contracts" && (<motion.div key="contracts" initial = {} {opacity: 0,y: 20}} animate = {} { opacity: 1,"
  " { opacity: 0,y: -20 ","
  " "}} className="space-y-4">" <div className="flex items-center justify-between">" <h3 className="text-lg font-semibold text-gray-900 dark: text-white">Smart Contracts</h3>,name:"
  "New Contract","
  ";"
  " address:"
  "0x" + Math.random().toString(36).substr(2,40),"
  ";"
  " network:"
  "ethereum",abi[],"
  ";"
  " functions["
  "function1",function2"],"
  " events["
  "Event1","
  "Event2"];"
  " "})} className = "px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700">" <Plus className="w-4 h-4 inline mr-2" /> Add Contract",<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">"{contracts.map((contract) => (<div key="{contract.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">" <div className="flex items-center justify-between mb-3">",<h4 className="font-medium text-gray-900 dark:text-white">{contract.name}</h4>" <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"> {contract.network}" <div className="space-y-2 text-sm">" <span className="text-gray-500 dark: text-gray-400">Address:</span>" <code className="text-xs font-mono">,{contract.address.slice(0,8)}.{contract.address.slice(-6)}" <span className="text-gray-500 dark: text-gray-400">Functions:</span>",<span className="text-gray-900 dark:text-white">{contract.functions.length}</span>" <span className="text-gray-500 dark: text-gray-400">Events:</span>",<span className="text-gray-900 dark:text-white">{contract.events.length}</span>" <span className="text-gray-500 dark: text-gray-400">Last Used:</span>" <span className="text-gray-900 dark:text-white">,{contract.lastInteraction.toLocaleDateString()} "{activeTab: === "nfts" && (<motion.div key = "nfts" initial = {}",{ opacity: ,0,"
  " <h3: className="text-lg font-semibold text-gray-900 dark: text-white">NFT: Collection</h3>","
  ";"
  " <button: onClick="{()" => setShowMintNFT(true)} className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700">",Mint: NFT",<div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-4">"{nfts.map((nft) => (<div key="{nft.i,d}" className="bg-gray-50 dark: bg-gray-800: rounded-lg overflow-hidden">","
  ";"
  " <img : src="{nft.image}" alt="{nft.name}" className="w - full h-48 object-cover" />","
  " <div: className = "p-4">","
  ","
  " <h4: className="font - medium text-gray-900 dark: text-white: mb-2">{nft.nam,e}</h4>","
  " <p: className="text - sm text-gray-600 dark: text-gray-400: mb-3">{nft.descriptio,n}</p>","
  " <span: className="text-gray-500 dark: text-gray-400">Token: ID:</span>","
  ";"
  " <span: className="text - gray-900 dark: text-white">{nft.tokenI,d}</span>","
  " <span: className="text-gray-500 dark: text-gray-400">Owner:</span>","
  ";"
  " <code: className = "text-xs font-mono">","
  " {nft.owner.slice(0,6)}.{nft.owner.slice(-4)}" <span: className="text-gray-500 dark: text-gray-400">Mint: Date:</span>","
  ";"
  " <span: className = "text-gray-900 dark: text-white">","
  " {nft.mintDate.toLocaleDateString()} </div>";"
  ";"
  " "{nft.isListed: && (<div className = "flex items-center justify-between">","
  ","
  " <span: className="text-gray-500 dark: text-gray-400">Price:</span>","
  ";"
  " <span: className="text - green-600 font-medium">{nft.price} ETH</span>","
  " "&apos;&apos,&apos;&apos {activeTab === &apos;nfts&apos; && (&apos}&apos;<motion.div key="&apos;nfts&apos;"
  " initial = {}" <h3 className="text-lg font-semibold text-gray-900 dark: text-white">NFT Collection</h3>","
  " <button onClick="{()" => setShowMintNFT(true)} className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700">",Mint NFT,"
  " <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">"{nfts.map((nft) => (<div key="{nft.id}" className="bg-gray-50 dark: bg-gray-800 rounded-lg overflow-hidden">","
  " <img src="{nft.image}" alt="{nft.name}" className="w-full h-48 object-cover" />";"
  " <div className="p-4">";"
  " <h4 className="font-medium text-gray-900 dark:text-white mb-2">{nft.name}</h4>";"
  " <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{nft.description}</p>";"
  " <span className = "text-gray-500 dark: text-gray-400">Token ID:</span>","
  " <span className="text-gray-900 dark:text-white">{nft.tokenId}</span>;"
  " <span className = "text-gray-500 dark: text-gray-400">Owner:</span>","
  " <code className="text-xs font-mono"> {nft.owner.slice(0,6)}.{nft.owner.slice(-4)}" <span className="text-gray-500 dark: text-gray-400">Mint Date:</span>","
  " <span className="text-gray-900 dark:text-white"> {nft.mintDate.toLocaleDateString()}" "{nft.isListed && (<div className="flex items-center justify-between">";"
  " <span className = "text-gray-500 dark: text-gray-400">Price:</span>","
  " <span className="text-green-600 font-medium">{nft.price} ETH</span> { opacity: 0,"
  " <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white&apos;>NFT Collection&apos,</h3>&apos,&apos,"
  "&apos,&apos,"
  " <button onClick="{()" => setShowMintNFT(true)} className="&apos;px-3" py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700&apos,>"&apos,&apos,&apos;&apos,Mint NFT&apos,"
  " <div className="&apos,grid" grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-4&apos,>"&apos,&apos,"
  "{nfts.map((nft) => (&apos}&apos;<div key="{nft.id}" className="&apos;bg-gray-50" dark: bg-gray-800 rounded-lg overflow-hidden&apos,>"&apos,&apos,"
  "&apos,&apos,"
  " <img src="{nft.image}" alt="{nft.name}" className="&apos;w-full" h-48 object-cover&apos; />&apos;&apos,&apos;&apos,"
  " <div className="&apos;p-4&apos">"&apos;&apos,&apos;&apos;"
  " <h4 className="&apos;font-medium" text-gray-900 dark: text-white mb-2&apos,>{nft.name}&apos;</h4>&apos;&apos,&apos;&apos,"
  " <p className="&apos;text-sm" text-gray-600 dark: text-gray-400 mb-3&apos,>{nft.description}&apos;</p>&apos;&apos;"
  " <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Token ID:&apos,</span>&apos,&apos,&apos,&apos,"
  " <span className="&apos,text-gray-900" dar,k: text-white&apos,>{nft.tokenId}&apos;</span>" <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Owne,r: &apos,</span>&apos,&apos,"
  "&apos,&apos,"
  " {nft.owner.slice(0,6)}.{nft.owner.slice(-4)}&apos;"
  " <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Mint Date:&apos,</span>&apos,&apos,"
  "&apos,&apos,"
  " {nft.mintDate.toLocaleDateString()}&apos,</div>&apos;&apos,"
  " &apos;&apos,&apos {nft.isListed && (&apos}&apos;<div className="&apos;flex" items-center justify-between&apos;>"&apos;&apos,&apos;&apos;"
  " <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Pric,e: &apos,</span>&apos,&apos,&apos;&apos,"
  ",<span className="&apos,text-green-600" font-medium&apos,>{nft.price} ETH&apos;</span>" "{activeTab = == "nfts" && (<motion.div key="nfts" initial = {}" <h3 className="text-lg font-semibold text-gray-900 dark: text-white">NFT Collection</h3>",<button onClick="{()" => setShowMintNFT(true)} className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700">" Mint NFT",<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">"{nfts.map((nft) => (<div key="{nft.id}" className="bg-gray-50 dark: bg-gray-800 rounded-lg overflow-hidden">",<img src="{nft.image}" alt="{nft.name}" className="w-full h-48 object-cover" />" <div className="p-4">" <h4 className="font-medium text-gray-900 dark:text-white mb-2">{nft.name}</h4>" <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{nft.description}</p>" <span className="text-gray-500 dark: text-gray-400">Token ID:</span>",<span className="text-gray-900 dark:text-white">{nft.tokenId}</span>" <span className="text-gray-500 dark: text-gray-400">Owner:</span>",{nft.owner.slice(0,6)}.{nft.owner.slice(-4)}" <span className="text-gray-500 dark: text-gray-400">Mint Date:</span>",{nft.mintDate.toLocaleDateString()}" "{nft.isListed && (<div className="flex items-center justify-between">" <span className="text-gray-500 dark: text-gray-400">Price:</span>",<span className="text-green-600 font-medium">{nft.price} ETH</span>" "{activeTab === "defi" && (<motion.div key="defi" initial = {}> "{activeTab: === "defi" && (<motion.div key = "defi" initial = {}",{ opacity: ,0,"
  " <h3: className="text-lg font-semibold text-gray-900 dark: text-white">DeFi: Positions</h3>",() => createDeFiPosition({}" type "staking,"
  ","
  ";"
  " protocol:"
  "Zion: Protocol,"
  ","
  ";"
  " asset:"
  "ZION,"
  ","
  ";"
  " amount:"
  "1000,"
  ","
  ";"
  " apy: 12.,5,"
  ";"
  " rewards:"
  "125","
  ","
  ";"
  " "})} className="px-3: py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">",Add: Position",<div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-4">"{defiPositions.map((position) => (<div key="{position.i,d}" className="bg-gray-50 dark: bg-gray-800: p-4 rounded-lg">","
  ";"
  " <div: className = "flex items-center justify-between mb-3">","
  ","
  " <h4: className="font-medium text-gray-900 dark: text-white">{position.protoco,l}</h4>";"
  ";"
  " <span: className="{"
  "px-2" py-1 text-xs font-medium rounded-full ${position.type === "staking" ? "bg-green-100 text-green-800" :"
  ","
  ","
  "> position.type == = "liquidity" ? "bg-blue-100 text-blue-800" :"
  ","
  ","
  " "bg-purple-100: text-purple-800"}"}>{position.type}";"
  ";"
  " <div: className = "space-y-3">","
  ","
  " <span: className="text-gray-500 dark: text-gray-400">Asset:</span>","
  ";"
  " <span: className="font - medium text-gray-900 dark: text-white">{position.asse,t}</span>","
  " <span: className="text-gray-500 dark: text-gray-400">Amount:</span>","
  ";"
  " <span: className="font - medium text-gray-900 dark: text-white">{position.amoun,t}</span>","
  " <span: className="text-gray-500 dark: text-gray-400">APY:</span>","
  ";"
  " <span: className="text - green-600 font-medium">{position.apy}%</span>","
  " <span: className="text-gray-500 dark: text-gray-400">Rewards:</span>","
  ";"
  " <span: className="text - orange-600 font-medium">{position.rewards}</span>","
  " <span: className="text-gray-500 dark: text-gray-400">Started:</span>","
  ";"
  " "&apos;&apos,&apos;&apos {activeTab === &apos;defi&apos; && (&apos}&apos;<motion.div key="&apos;defi&apos;"
  " initial = {}" <h3 className="text-lg font-semibold text-gray-900 dark: text-white">DeFi Positions</h3>,type "staking","
  " protocol:"
  "Zion Protocol","
  " asset:"
  "ZION","
  " amount:"
  "1000",{opacity: 0,"
  " <h3 className="&apos;text - lg" font-semibold text-gray-900 dark: text-white&apos,>DeFi Positions&apos,</h3>" type &apos,staking&apos,"
  ",protocol: &apos,Zion Protocol&apos,"
  " asset: &apos,ZION&apos,amount: &apos,1000&apos,"
  " apy: 12.5,"
  " rewards: &apos,125","
  ",&apos,&apos,"
  "&apos})} className="&apos;px-3" py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&apos,>"&apos,&apos,&apos;&apos,Add Position&apos,"
  " <div className="&apos,grid" grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-4&apos,>"&apos,&apos,"
  "{defiPositions.map((position) => (&apos}&apos;<div key="{position.id}" className="&apos;bg-gray-50" dark: bg-gray-800 p-4 rounded-lg&apos,>"&apos,&apos,&apos;&apos,"
  ",<div className="&apos;flex" items-center justify-between mb-3&apos;>"&apos;&apos;"
  "&apos;&apos,"
  " <h4 className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{position.protocol}&apos;</h4>&apos;"
  "&apos;"
  "&apos;&apos;"
  " <span className="{"
  "px-2" py-1 text-xs font-medium rounded-full ${position.type === &apos;staking&apos; ? &apos;bg-green-100 text-green-800&apos; :&apos;&apos;"
  " position.type === &apos;liquidity&apos; ? &apos;bg-blue-100 text-blue-800&apos; :&apos;"
  "&apos;"
  "> &apos;bg-purple-100 text-purple-800&apos}"}>{position.type}&apos;&apos;"
  " <div className="&apos;space-y-3&apos">"&apos;&apos,&apos;&apos;"
  " <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Asset:&apos,</span>&apos,&apos,&apos,&apos,"
  " <span className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{position.asset}&apos;</span>" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Amount:&apos,</span>&apos,&apos,&apos,&apos,"
  " <span className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{position.amount}&apos;</span>" <span className="&apos;text-gray-500" dark: text-gray-400&apos,>AP,Y: &apos,</span>&apos,&apos,&apos;&apos,"
  ",<span className="&apos,text-green-600" font-medium&apos,>{position.apy}%&apos;</span>" <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Reward,s: &apos,</span>&apos,&apos,&apos;&apos,"
  ",<span className="&apos,text-orange-600" font-medium&apos,>{position.rewards}&apos;</span>" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Started:&apos,</span>&apos,&apos,"
  "&apos,&apos,"
  " {position.startDate.toLocaleDateString()}&apos,"
  "{activeTab = == "defi" && (<motion.div key="defi" initial = {}" <h3 className="text - lg font-semibold text-gray-900 dark: text-white">DeFi Positions</h3>",type "staking","
  ","
  " protocol:"
  "Zion Protocol","
  ","
  " asset:"
  "ZION","
  ";"
  " amount:"
  "1000",apy: 12.5,"
  ";"
  " rewards:"
  "125","
  " "})} className = "px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">",Add Position,"
  " <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">"{defiPositions.map((position) => (<div key="{position.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">","
  " <div className="flex items-center justify-between mb-3">","
  " <h4 className="font-medium text-gray-900 dark:text-white">{position.protocol}</h4>";"
  " <span className="{"
  "px-2" py-1 text-xs font-medium rounded-full ${position.type == = "staking" ? "bg-green-100 text-green-800" :"
  ",position.type == = "liquidity" ? "bg-blue-100 text-blue-800" :"
  "> "bg-purple-100 text-purple-800"}"}>{position.type}" <div className="space-y-3">";"
  " <span className = "text-gray-500 dark: text-gray-400">Asset:</span>","
  " <span className="font-medium text-gray-900 dark:text-white">{position.asset}</span>;"
  " <span className = "text-gray-500 dark: text-gray-400">Amount:</span>","
  " <span className="font-medium text-gray-900 dark:text-white">{position.amount}</span>;"
  " <span className = "text-gray-500 dark: text-gray-400">APY:</span>","
  " <span className="text-green-600 font-medium">{position.apy}%</span>;"
  " <span className = "text-gray-500 dark: text-gray-400">Rewards:</span>","
  " <span className="text-orange-600 font-medium">{position.rewards}</span>;"
  " <span className = "text-gray-500 dark: text-gray-400">Started:</span>","
  " <span className="text-gray-900 dark:text-white"> {position.startDate.toLocaleDateString()}" "{activeTab === "transactions" && (<motion.div key="transactions" initial = {}" "})} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">" Add Position",<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">"{defiPositions.map((position) => (<div key="{position.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">" <div className="flex items-center justify-between mb-3">",<h4 className="font-medium text-gray-900 dark:text-white">{position.protocol}</h4>" <span className="{"
  "px-2" py-1 text-xs font-medium rounded-full ${position.type === "staking" ? "bg-green-100 text-green-800" :"
  " <div className="space-y-3">" <span className="text-gray-500 dark: text-gray-400">Asset:</span>",<span className="font-medium text-gray-900 dark:text-white">{position.asset}</span>" <span className="text-gray-500 dark: text-gray-400">Amount:</span>",<span className="font-medium text-gray-900 dark:text-white">{position.amount}</span>" <span className="text-gray-500 dark: text-gray-400">APY:</span>",<span className="text-green-600 font-medium">{position.apy}%</span>" <span className="text-gray-500 dark: text-gray-400">Rewards:</span>",<span className="text-orange-600 font-medium">{position.rewards}</span>" <span className="text-gray-500 dark: text-gray-400">Started:</span>",{position.startDate.toLocaleDateString()} "{activeTab: === "transactions" && (<motion.div key = "transactions" initial = {}",{ opacity: ,0,"
  " <h3: className="text-lg font-semibold text-gray-900 dark: text-white">Transaction: History</h3>","
  ";"
  " <button: onClick="{()" => setShowSendTransaction(true)} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">","
  ";"
  " <Send : className = "w-4 h-4 inline mr-2" />","
  ",Send: Transaction",<div: className="space-y-3">"{transactions.map((tx) => (<div key="{tx.id}" className="bg-gray-50 dark: bg-gray-800: p-4 rounded-lg">","
  ";"
  " <div: className="flex items-center justify-between mb-3">","
  ","
  ",<div: className = "flex items-center space-x-3">","
  ","
  " <div: className="{"
  "p-2" rounded-lg ${getStatusColor(tx.status)}"}>";"
  ";"
  " <Coins : className = "w-4 h-4" />","
  ","
  " <p: className="font - medium text-gray-900 dark: text-white">","
  " {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction","
  " <p: className="text-sm text-gray-500 dark: text-gray-400">",Hash: {tx.hash.slice(,0,8)}.{tx.hash.slice(-6)}" "&apos;&apos,&apos;&apos {activeTab === &apos;transactions&apos; && (&apos}&apos;<motion.div key="&apos;transactions&apos;"
  " initial = {}" <h3 className="text-lg font-semibold text-gray-900 dark: text-white">Transaction History</h3>","
  " <button onClick="{()" => setShowSendTransaction(true)} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">","
  ",<Send className = "w-4 h-4 inline mr-2" />,Send Transaction,"
  " <div className="space-y-3">"{transactions.map((tx) => (<div key="{tx.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">","
  ",<div className = "flex items-center justify-between mb-3">","
  " <div className="flex items-center space-x-3">","
  " <div className="{"
  "p-2" rounded-lg ${getStatusColor(tx.status)}"}>";"
  " <Coins className="w-4 h-4" />;"
  " <p className="font-medium text-gray-900 dark:text-white"> {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction";"
  " <p className = "text-sm text-gray-500 dark: text-gray-400">,Hash: {tx.hash.slice(0,8)}.{tx.hash.slice(-6)}" </p>" </div>" </div>";"
  " <span className = "{"
  "px-2" py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}"}> {tx.status}" <div className="grid grid-cols-1 md: grid-cols-3 gap-4 text-sm">","
  " <span className="text-gray-500 dark:text-gray-400">From:</span>","
  " <code className="block text-xs font-mono mt-1"> {tx.from.slice(0,8)}.{tx.from.slice(-6)}" <span className="text-gray-500 dark: text-gray-400">To:</span>","
  " <code className="block text-xs font-mono mt-1"> {tx.to.slice(0,8)}.{tx.to.slice(-6)}" <span className="text-gray-500 dark: text-gray-400">Value:</span>","
  " <p className="font-medium text-gray-900 dark:text-white mt-1">{tx.value} ETH</p>;"
  " <div className = "mt-3 pt-3 border-t border-gray-200 dark: border-gray-600">","
  " <span className="text-gray-500 dark:text-gray-400">Gas Used:</span>","
  " <p className="text-gray-900 dark:text-white">{tx.gasUsed}</p>;"
  " <span className = "text-gray-500 dark: text-gray-400">Gas Price:</span>","
  " <p className="text-gray-900 dark:text-white">{tx.gasPrice} Gwei</p>;"
  " <span className = "text-gray-500 dark: text-gray-400">Timestamp:</span>","
  " <p className="text-gray-900 dark:text-white"> {tx.timestamp.toLocaleString()} </div> { opacity: 0,"
  " <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white&apos;>Transaction History&apos,</h3>&apos,&apos,"
  "&apos,&apos,"
  " <button onClick="{()" => setShowSendTransaction(true)} className="&apos;px-3" py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&apos,>"&apos,&apos,&apos;&apos;"
  " <Send className="&apos;w-4" h-4 inline mr-2&apos; /> Send Transaction&apos,"
  ",<div className="&apos;space-y-3&apos">"&apos,&apos,"
  "{transactions.map((tx) => (&apos}&apos;<div key="{tx.id}" className="&apos;bg-gray-50" dark: bg-gray-800 p-4 rounded-lg&apos,>"&apos,&apos,&apos;&apos;"
  " <div className="&apos;flex" items-center justify-between mb-3&apos;>"&apos;"
  "&apos,"
  ",<div className="&apos;flex" items-center space-x-3&apos;>"&apos,"
  "&apos,"
  " <div className="{"
  "p-2" rounded-lg ${getStatusColor(tx.status)}"}>&apos;&apos,&apos;&apos,"
  " <Coins className="&apos;w-4" h-4&apos; />&apos,</div>&apos;&apos,&apos;&apos;"
  " <p className="&apos;font-medium" text-gray-900 dark: text-white&apos,>" {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction&apos;&apos,&apos;&apos;"
  " <p className="&apos;text-sm" text-gray-500 dark: text-gray-400&apos,> Has,h: {tx.hash.slice(0,8)}.{tx.hash.slice(-6)}"&apos,"
  "{activeTab = == "transactions" && (<motion.div key="transactions" initial = {}" <h3 className="text-lg font-semibold text-gray-900 dark: text-white">Transaction History</h3>",<button onClick="{()" => setShowSendTransaction(true)} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">" <Send className="w-4 h-4 inline mr-2" /> Send Transaction",<div className="space-y-3">"{transactions.map((tx) => (<div key="{tx.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">" <div className="flex items-center justify-between mb-3">" <div className="flex items-center space-x-3">",<div className="{"
  "p-2" rounded-lg ${getStatusColor(tx.status)}"}>" <Coins className="w-4 h-4" />" <p className="font-medium text-gray-900 dark: text-white">",{tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction" <p className="text-sm text-gray-500 dark: text-gray-400">,Hash: {tx.hash.slice(0,8)}.{tx.hash.slice(-6)}" </p>" </div>" </div>" <span: className="{"
  "px-2" py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}"}>" {tx.status}" <div: className="grid grid-cols-1 md: grid-cols-3: gap-4 text-sm">","
  ";"
  " <span: className="text-gray-500 dark: text-gray-400">From:</span>","
  ";"
  " <code: className = "block text-xs font-mono mt-1">","
  " {tx.from.slice(0,8)}.{tx.from.slice(-6)}" <span: className="text-gray-500 dark: text-gray-400">To:</span>","
  ";"
  " <code: className = "block text-xs font-mono mt-1">","
  " {tx.to.slice(0,8)}.{tx.to.slice(-6)}" <span: className="text-gray-500 dark: text-gray-400">Value:</span>","
  ";"
  " <p: className="font - medium text-gray-900 dark: text-white: mt-1">{tx.valu,e} ETH</p>","
  " <div: className="mt-3 pt-3 border-t border-gray-200 dark: border-gray-600">","
  ";"
  " <span: className="text-gray-500 dark: text-gray-400">Gas: Used:</span>","
  ";"
  " <p: className="text - gray-900 dark: text-white">{tx.gasUse,d}</p>","
  " <span: className="text-gray-500 dark: text-gray-400">Gas: Price:</span>","
  ";"
  " <p: className="text - gray-900 dark: text-white">{tx.gasPric,e} Gwei</p>","
  " <span: className="text-gray-500 dark: text-gray-400">Timestamp:</span>","
  ";"
  " <p: className="text-gray-900 dark: text-white">","
  ";"
  " <div className="&apos;grid" grid-cols-1 md: grid-cols-3 gap-4 text-sm&apos,>"&apos,&apos,"
  ",<span className="&apos,text-gray-500" dark:text-gray-400&apos,>Fro,m: &apos,</span>&apos,&apos,&apos;&apos,"
  ",<code className = "&apos,block" text-xs font-mono mt-1&apos,> {tx.from.slice(0,8)}.{tx.from.slice(-6)}&apos;"
  " <span className="&apos;text-gray-500" dark: text-gray-400&apos,>T,o: &apos,</span>&apos,&apos,"
  "&apos,&apos,"
  " {tx.to.slice(0,8)}.{tx.to.slice(-6)}&apos;"
  " <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Value:&apos,</span>&apos,&apos,&apos,&apos,"
  " <p className="&apos,font-medium" text-gray-900 dar,k: text-white mt-1&apos,>{tx.value} ETH&apos;</p>" <div className="&apos;mt-3" pt-3 border-t border-gray-200 dark: border-gray-600&apos,>"&apos,&apos,&apos;&apos,"
  ",<span className="&apos;text-gray-500" dark: text-gray-400&apos;>Gas Used:&apos,</span>&apos,&apos,&apos,&apos,"
  " <p className="&apos,text-gray-900" dar,k: text-white&apos,>{tx.gasUsed}&apos;</p>" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Gas Price:&apos,</span>&apos,&apos,&apos,&apos,"
  " <p className="&apos,text-gray-900" dar,k: text-white&apos,>{tx.gasPrice} Gwei&apos;</p>" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Timestamp:&apos,</span>&apos,&apos,&apos,&apos,"
  " <p className = "&apos,text-gray-900" dar,k: text-white&apos,> {tx.timestamp.toLocaleString()}&apos,</div>" <div className = "grid grid-cols-1 md: grid-cols-3 gap-4 text-sm">" <span className="text-gray-500 dark:text-gray-400">From:</span>" <code className="block text-xs font-mono mt-1">,{tx.from.slice(0,8)}.{tx.from.slice(-6)}" <span className="text-gray-500 dark: text-gray-400">To:</span>",{tx.to.slice(0,8)}.{tx.to.slice(-6)}" <span className="text-gray-500 dark: text-gray-400">Value:</span>",<p className="font-medium text-gray-900 dark:text-white mt-1">{tx.value} ETH</p>" <div className="mt-3 pt-3 border-t border-gray-200 dark: border-gray-600">" <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">" <span className="text-gray-500 dark:text-gray-400">Gas Used:</span>",<p className="text-gray-900 dark:text-white">{tx.gasUsed}</p>" <span className="text-gray-500 dark: text-gray-400">Gas Price:</span>",<p className="text-gray-900 dark:text-white">{tx.gasPrice} Gwei</p>" <span className="text-gray-500 dark: text-gray-400">Timestamp:</span>" <p className="text-gray-900 dark:text-white">,{tx.timestamp.toLocaleString()} </motion.div>) } </AnimatePresence> </div> {}";"
  " <AnimatePresence>"{showMintNFT && (<motion.div initial="{{"
  " opacity: 0 }} animate="{{"
  " opacity: 1 }} exit="{{"
  " opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> <motion.div initial = {} {scale: 0.9,opacity: 0}} animate = {} {scale: 1> opacity: 1}} exit = {}" opacity: 0 ","
  "> "}} className="bg-white dark: bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">","
  " <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mint New NFT</h3>","
  ",<div className = "space-y-4">","
  " Name","
  " <input type="text" value="{nftForm.name}" onChange = {}> (e) => setNftForm(prev = > ({.prev,name: e.target.value ","
  " "}))} className="w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Name" />,Description,</label>,"
  " <textarea value = "{nftForm.description}" onChange = {}" description: e.target.value ","
  "> "}))} className="w - full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Description" rows="{3}/">,Image URL (optional)";"
  " <input type = "url" value="{nftForm.image}" onChange = {}" image: e.target.value ","
  " "}))} className="w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="https: <div className="flex space-x-3 mt-6">","
  " <button onClick="{handleMintNFT}" disabled="{!nftForm.name.trim()" | isProcessing} className="flex-1 px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50">"{isProcessing ? "Minting." :"
  "Mint NFT"}" <button onClick="{()" => setShowMintNFT(false)} className="flex-1 px-4 py-2 text-gray-700 dark: text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">,Cancel,</motion.div>,"
  " </AnimatePresence> {}";"
  " <AnimatePresence>"{showSendTransaction && (<motion.div initial="{{"
  " opacity: 0 }} animate="{{"
  " opacity: 1 }} exit="{{"
  " opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">;"
  " <h3 className = "text-lg font-semibold text-gray-900 dark: text-white mb-4">Send Transaction</h3>","
  " To Address","
  " <input type="text" value="{transactionForm.to}" onChange = {}> (e) => setTransactionForm(prev = > ({.prev,to: e.target.value ","
  " "}))} className = "w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0x." />,"
  " Amount (ETH)","
  " <input type="number" step="0.001" value="{transactionForm.value}" onChange = {}" value: e.target.value ","
  " "}))} className="w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0.1" />,Data(optional),"
  " <textarea value="{transactionForm.data}" onChange = {}" data: e.target.value ","
  "> "}))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0x." rows="{3}/">;"
  " <button onClick = "{handleSendTransaction}" disabled="{!transactionForm.to.trim()" | !transactionForm.value | isProcessing} className="flex-1 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50">"{isProcessing ? "Sending." :"
  "Send Transaction"}" <button onClick="{()" => setShowSendTransaction(false)} className="flex-1 px-4 py-2 text-gray-700 dark: text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">,</div>)}" " </AnimatePresence>" {}";"
  ";"
  " <AnimatePresence>"{showMintNFT: && (<motion.div initial = "{{"
  " opacity: 0}} animate="{{"
  " opacity: 1}} exit="{{"
  " opacity: 0}} className="fixed: inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">","
  ",<motion.div: initial = {} {scale: 0.,9,opacity: ,0}} animate: = {} {scale: ,1> opacity: ,1}} exit: = {}> opacity: 0:"
  ","
  ","
  ";"
  " "}} className="bg-white: dark: bg-gray-800: rounded-lg p-6 w-full max-w-md mx-4">","
  ";"
  " <h3: className="text-lg font-semibold text-gray-900 dark: text-white: mb-4">Mint New NFT</h3>","
  ","
  ";"
  " <div: className="space - y-4">","
  ",Name","
  ","
  " <input: type="text" value="{nftForm.name}" onChange = {}",(e) => setNftForm(prev: => ({.prev,"
  " name: e.target.value:"
  ","
  ";"
  " "}))} className="w-full: px-3 py-2 border border-gray-300 dark: border-gray-600: rounded-lg bg-white dark:bg-gray-700: text-gray-900 dark:text-white" placeholder="NFT: Name" />",Description: </label>,(e) => setNftForm(prev = > ({.prev,description: e.target.value:"
  ","
  ";"
  " "}))} className = "w - full: px-3 py-2 border border-gray-300 dark: border-gray-600: rounded-lg bg-white dark:bg-gray-700: text-gray-900 dark:text-white" placeholder="NFT: Description" rows="{,3}/">",Image: URL (optional)","
  ","
  " <input: type = "url" value="{nftForm.image}" onChange = {}",(e) => setNftForm(prev: => ({.prev,"
  " image: e.target.value:"
  ","
  ";"
  " "}))} className="w-full: px-3 py-2 border border-gray-300 dark: border-gray-600: rounded-lg bg-white dark:bg-gray-700: text-gray-900 dark:text-white" placeholder="https: <div: className = "flex space-x-3 mt-6">","
  ","
  " <button: onClick="{handleMintNFT}" disabled="{!nftForm.name.trim()" | isProcessing} className="flex - 1 px-4 py-2 text-white bg-purple-600 rounded-lg hover: bg-purple-700: disabled:opacity-50">"{isProcessing: ? "Minting." :"
  "Mint: NFT,"
  "}","
  " <button: onClick="{()" => setShowMintNFT(false)} className="flex-1 px-4 py-2 text-gray-700 dark: text-gray-300: bg-gray-100 dark:bg-gray-700: rounded-lg hover:bg-gray-200: dark:hover:bg-gray-600">",Cancel: </button>",{}&apos;&apos,&apos;&apos;"
  " <AnimatePresence>&apos;&apos,&apos {showMintNFT && (&apos}&apos;<motion.div initial="{{"
  " opacity: 0 }} animate="{{"
  " opacity: 1 }} exit="{{"
  " opacity: 0 }} className="&apos;fixed" inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50&apos;>&apos,"
  " {}" <AnimatePresence>"{showMintNFT && (<motion.div initial = "{{"
  " opacity: 0 }} animate="{{"
  " opacity: 1 }} exit="{{"
  " opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> {scale: 0.9,opacity: 0}} animate = {} { scale: 1,{ scale: 0.9,opacity: 0 }} className="bg-white dark:bg-gray - 800 rounded-lg p - 6 w-full max - w-md mx -4"> <h3 className="text-lg font - semibold text-gray - 900 dark:text-white mb-4">Mint New NFT</h3> " }} className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">" <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mint New NFT</h3> " <div className="space-y-4"> <div>" <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> Name </label> <input type="text" value={nftForm.name} onChange={ (e) => setNftForm(prev => ({ .prev,name: e.target.value " }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Name"/> </div> <div>" <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> Description </label> <textarea value={nftForm.description} onChange={ (e) => setNftForm(prev => ({ .prev,description: e.target.value " }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Description" rows={3}/> </div> <div> <label className="block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1"> Image URL(optional) </label> <input type="url" value={nftForm.image} onChange={ (e) => setNftForm(prev => ({ .prev,image: e.target.value " }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="https: </div> </div> " <div className="flex space-x-3 mt-6">"; <buttononClick={handleMintNFT} disabled={!nftForm.name.trim() | isProcessing} className="flex-1 px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50">"; {isProcessing ? "Minting." :"
  "Mint NFT"} </button> " <button onClick={() => setShowMintNFT(false)} className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"> Cancel </button> </div> </motion.div> </motion.div>) } </AnimatePresence> {} <AnimatePresence>" {showSendTransaction && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">; <motion.div initial = { { scale: 0.9,opacity: 0 }} animate = { { scale: 1,opacity: 1 }} exit = { { scale: 0.9,opacity: 0 }} className="bg-white dark:bg-gray - 800 rounded-lg p - 6 w-full max - w-md mx -4"> <h3 className="text-lg font - semibold text-gray - 900 dark:text-white mb-4">Send Transaction</h3> " }} className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">" <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Send Transaction</h3> " <div className="space-y-4"> <div>" <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> To Address </label> <input type="text" value={transactionForm.to} onChange={ (e) => setTransactionForm(prev => ({ .prev,to: e.target.value " }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0x."/> </div> <div> <label className="block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1"> Amount(ETH) </label> <input type="number" step="0.001" value={transactionForm.value} onChange={ (e) => setTransactionForm(prev => ({ .prev,value: e.target.value " }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0.1"/> </div> <div> <label className="block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1"> Data(optional) </label> <textarea value={transactionForm.data} onChange={ (e) => setTransactionForm(prev => ({ .prev,data: e.target.value " }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0x." rows={3}/> </div> </div> " <div className="flex space-x-3 mt-6">"; <buttononClick={handleSendTransaction} disabled={!transactionForm.to.trim() | !transactionForm.value | isProcessing} className="flex-1 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50">"; {isProcessing ? "Sending." :"
  "Send Transaction"} </button> " <button onClick={() => setShowSendTransaction(false)} className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"> Cancel </button> </div> </motion.div> </motion.div>) } </AnimatePresence> </div>)};"
  ";"
  ";"
  "` </textarea> </motion> </textarea> </motion> </AnimatePresence> </button> </div> </motion> </AnimatePresence> </button> </textarea> </motion> </button> </textarea> </div> </motion> </p> </div> </code> </div> </p> </code> </div> </p> </div> </code> </div> </span> </p> </div> </button> </motion> </p> </div> </button> </p> </code> </div> </span> </p> </div> </button> </motion> </p> </div> </div> </button> </motion> </div> </span> </div> </motion> </span> </div> </span> </div> </motion> </div> </span> </div> </motion> </div> </span> </div> </motion> </div> </button> </motion> </div> </button> </div> </span> </code> </div> </button> </motion> </div> </span> </code> </div> </button> </motion> </span> </code> </div> </span> </div> </motion> </span> </code> </div> </span> </div> </motion> </span> </div> </button> </div> </motion> </span> </div> </button> </div> </motion> </button> </div> </p> </button> </div> </div> </motion> </button> </div> </div> </button> </div> </button> </div> </div> </button> </div> </div> </div>;"
  ";"
  ";"
  ""`"`
import { useState } from 'react';,
import {useState,useCallback} from 'react';' import {motion,AnimatePresence} from 'framer-motion';' import {Wallet,Smartphone,Coins,Image,TrendingUp,BarChart3,Plus,Send,Download,Loader2} from 'lucide-react'; ; export const BlockchainWeb3Dashboard = (props) => { const { trackEvent }; = useAnalytics({enableTracking: true,enableUserBehaviorTracking: true});' const [activeTab,setActiveTab] = useState('overview'); const [showMintNFT,setShowMintNFT] = useState(false); const [showSendTransaction,setShowSendTransaction] = useState(false); const {wallet,contracts,nfts,defiPositions,transactions,metrics,isConnecting,isProcessing,connectWallet,disconnectWallet,switchNetwork,addContract,mintNFT,sendTransaction,createDeFiPosition} = useBlockchainWeb3(); const [nftForm,setNftForm] = useState({} ' " " name: "," description: "," image: " };); const [transactionForm,setTransactionForm] = useState({} ' " " to: "," value: "," data: " };); const handleConnectWallet = useCallback(async () => {} try: {},await: connectWallet()","," trackEvent("blockchain",dashboard",wallet_connected")}" catch: (error) {}" export const BlockchainWeb3Dashboard = (props) => {" const { trackEvent }; = useAnalytics();" export const BlockchainWeb3Dashboard = (props) => {const { trackEvent } = useAnalytics({enableTracking: true,enableUserBehaviorTracking: true};)";" export const BlockchainWeb3Dashboard = memo(({className = "}) => { const { trackEvent } = useAnalytics({enableTracking: true,enableUserBehaviorTracking: true};)"framer-motion";react"framer - motion",lucide-react";&apos;&apos export const BlockchainWeb3Dashboard = (props) => {&apos};&apos const;const {trackEvent} = useAnalytics({enableTracking: true," enableUserBehaviorTracking: true};)";&apos;&apos const [activeTab,setActiveTab] = useState(&apos;overview&apos);&apos;" export const BlockchainWeb3Dashboard = (props) => {" "}" const {trackEvent} = useAnalytics({enableTracking: true,enableUserBehaviorTracking: true})" export const BlockchainWeb3Dashboard = (props) => {const [activeTab,setActiveTab] = useState("overview")} const [nftForm,setNftForm] = useState({}" " " name: "," description: "," image: "}) } const [transactionForm,setTransactionForm] = useState({}" to: "," value: "," data: "}) }; &apos &apos;&apos name: &apos,&apos,&apos;&apos description: &apos,&apos,&apos;&apos image: &apos,&apos})&apos;&apos to: &apos,&apos,&apos;&apos value: &apos,&apos,&apos;&apos data: &apos,&apos})&apos;&apos const handleConnectWallet = useCallback(async () => {} try {} await connectWallet() }; trackEvent(&apos;blockchain&apos,dashboard&apos,wallet_connected&apos)} catch (error) {}" },[connectWallet,trackEvent]);&apos;&apos const handleMintNFT = useCallback(async () => {} if(nftForm.name.trim() && wallet) {}; const;const;const metadata = {} name: nftForm.name,description: nftForm.description," image: nftForm.image || "http,s: "&apos,"};"&apos;&apos}" await mintNFT(contracts[1]?.address || &apos;&apos,metadata)" setNftForm({name : &apos,&apos,description: &apos,&apos,image: &apos,&apos})",setShowMintNFT(false) } trackEvent(&apos;blockchain&apos,dashboard&apos,nft_minted&apos)} ";" ";" name: ",";" description: ",";" image: "})" to: ",";" value: ",";" data: "})" await connectWallet()";" trackEvent("blockchain",dashboard",wallet_connected")}" },[connectWallet,trackEvent]) } const metadata = {} name: nftForm.nam,e,description: nftForm.descriptio,n," image: nftForm.image: || "https: "}"};";";" await : mintNFT(contracts[1]?.address || ",metadata)",,setNftForm({name: ",",description: ",",image: "})";" setShowMintNFT(false)";";" trackEvent("blockchain",dashboard",nft_minted")}";" },[nftForm,wallet,contracts,mintNFT,trackEvent]) } const handleSendTransaction = useCallback(async () => {} if(transactionForm.to.trim() && transactionForm.value && wallet) {},await: sendTransaction(transactionForm.to,transactionForm.value,transactionForm.data || null)",,setTransactionForm({to: ",",value: ",",data: "};)";" setShowSendTransaction(false)";" trackEvent("blockchain",dashboard",transaction_sent")}";" },[transactionForm,wallet,sendTransaction,trackEvent]) } const getStatusColor = (props) => {} switch: (status) {},case: "confirmed": return: "text-green-600 bg-green-100",,",case: "pending": return: "text-yellow-600 bg-yellow-100",,," case: "failed": return: "text-red-600 bg-red-100","," default: return: "text-gray-600 bg-gray-100,"}"};";";" return: (<div className="{"bg-white" dark: bg-gray-900: rounded-lg shadow-lg border border-gray-200 dark:border-gray-700: ${classNam,e}"}>"{}";";" <div: className="flex items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700">",";" <div: className = "flex items-center space-x-3">","," <div: className="p-2 bg-blue-100 dark: bg-blue-900: rounded-lg">",";" <Wallet : className = "w-16 h-16 text-gray-400 mx-auto mb-4" />","," <h3: className = "text - lg font-medium text-gray-900 dark: text-white: mb-2">",",Connect: Your Wallet",,",</h3>","," <p: className="text - gray-500 dark: text-gray-400: mb-6">",",Connect: your Web3 wallet to start using blockchain features",,",</p>","," <button: onClick="{handleConnectWallet}" disabled="{isConnecting}" className="px - 6 py-3 text-white bg-blue-600 rounded-lg hover: bg-blue-700: disabled:opacity-50">"{isConnecting: ? "Connecting..." : "Connect: Wallet,"}",,</button>";";" </div>) : (<div: className = "space-y-6">","," <div: className="bg-gray-50 dark: bg-gray-800: p-6 rounded-lg">",";" <h3: className="text-lg font-semibold text-gray-900 dark: text-white: mb-4">Wallet Information</h3>",";" <div: className = "grid grid - cols-1 md: grid-cols-2: gap-4">",",<div>"," <label: className = "block text - sm font-medium text-gray-700 dark: text-gray-300: mb-1">",",Address",</label>";";" <div: className = "flex items-center space-x-2">","," <code: className = "px - 3 py-2 bg-gray-100 dark: bg-gray-700: rounded text-sm font-mono">"," {wallet.address}",,</code>";";" <button: onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="p-2 text-gray-500 hover: text-gray-700: dark:text-gray-400: dark:hover:text-gray-200">",";" <Download : className="w-4 h-4" />",,</button> </div>" ",,",Balance","," <p: className = "text-2xl font-bold text-gray-900 dark: text-white">"," {wallet.balance} ETH: </p>",Network","," <p: className = "text - lg text-gray-900 dark: text-white">{wallet.networ,k}</p>",,Chain: ID","," <p: className = "text - lg text-gray-900 dark: text-white">{wallet.chainI,d}</p>",,</div>";" ";";" <h3: className="text-lg font-semibold text-gray-900 dark: text-white: mb-4">Quick Actions</h3>",";" <div: className="grid grid-cols-1 md: grid-cols-2: gap-4">",";" <button: onClick="{()" => setShowSendTransaction(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700">",";" <Send : className="w-5 h-5" />",,<span>Send: Transaction</span>",</button>","," <button: onClick="{()" => setShowMintNFT(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700">",";" <Plus : className="w-5 h-5" />",",<span>Mint: NFT</span>,name: nftForm.name,description: nftForm.description," image: nftForm.image || "https: "}"}" await mintNFT(contracts[1]?.address || ",metadata)",setNftForm({name: ",description: ",image: "}) } name: nftForm.name,description: nftForm.description," "}"}";" await mintNFT(contracts[1]?.address || ",metadata)",setNftForm({name: ",description: ",image: "})";" trackEvent("blockchain",dashboard",nft_minted")}" },[nftForm,wallet,contracts,mintNFT,trackEvent]);&apos;&apos if(transactionForm.to.trim() && transactionForm.value && wallet) {}" await sendTransaction(transactionForm.to,transactionForm.value,transactionForm.data || null)",setTransactionForm({to: ",value: ",data: "}) } setTransactionForm({to: &apos,&apos,value: &apos,&apos,data: &apos,&apos})" setShowSendTransaction(false) } trackEvent(&apos;blockchain&apos,dashboard&apos,transaction_sent&apos)}" await sendTransaction(transactionForm.to,transactionForm.value,transactionForm.data || null)"," setTransactionForm({to: ",value: ",data: "})" setShowSendTransaction(false)";" trackEvent("blockchain",dashboard",transaction_sent")}" },[transactionForm,wallet,sendTransaction,trackEvent]) ;&apos;&apos const getStatusColor = (props) => {} switch (status) {}; case &apos;confirmed&apos;: return &apos;text - green-600 bg-green-100",case &apos;pending&apos;: return &apos;text - yellow-600 bg-yellow-100",case &apos;failed&apos;: return &apos;text-red-600 bg-red-100 default: return &apos,text-gray-600 bg-gray-100&apos}"}" return (&apos;&apos;<div className="{"bg-white" dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dar,k:border-gray-700 ${className}"}>&apos;&apos,{}&apos;&apos,&apos;&apos," <div className="&apos;flex" items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700&apos,>"&apos,&apos,&apos;&apos;" <div className="&apos;flex" items-center space-x-3&apos;>"&apos;&apos,&apos;&apos;" <div className="&apos;p-2" bg-blue-100 dark: bg-blue-900 rounded-lg&apos,>"&apos,&apos,&apos;&apos;" <Wallet className="&apos;w-16" h-16 text-gray-400 mx-auto mb-4&apos; />&apos;&apos,&apos;&apos," <h3 className="&apos;text-lg" font-medium text-gray-900 dark: text-white mb-2&apos,>" Connect Your Wallet&apos,&apos,&apos;&apos,",</h3>&apos;&apos,&apos;&apos," <p className="&apos,text-gray-500" dar,k: text-gray-400 mb-6&apos,>" Connect your Web3 wallet to start using blockchain features&apos,&apos,&apos;&apos,",</p>&apos;&apos,&apos,&apos," <button onClick="{handleConnectWallet}" disabled="{isConnecting}" className="&apos;px-6" py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disable,d: opacity-50&apos,>&apos {isConnecting ? &apos,Connecting...&apos,: &apos,Connect Wallet&apos}"&apos;&apos," </button>&apos;&apos,&apos;&apos," </div>) : (<div className="&apos;space-y-6&apos">"&apos;&apos,&apos;&apos;" <div className="&apos;bg-gray-50" dark: bg-gray-800 p-6 rounded-lg&apos,>"&apos,&apos,&apos;&apos;" <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white mb-4&apos;>Wallet Information&apos,</h3>&apos,&apos,&apos;&apos," <div className="&apos;grid" grid-cols-1 md: grid-cols-2 gap-4&apos,>"&apos,&apos," <div>&apos;&apos,&apos;&apos," <label className="&apos;block" text-sm font-medium text-gray-700 dark: text-gray-300 mb-1&apos,>" Address&apos,&apos,&apos;&apos,</label>&apos;&apos,&apos;&apos,",<div className="&apos;flex" items-center space-x-2&apos;>"&apos;&apos,&apos;&apos," <code className = "&apos,px-3" py-2 bg-gray-100 dar,k: bg-gray-700 rounded text-sm font-mono&apos,> {wallet.address}&apos;&apos,&apos;&apos,</code>&apos;&apos,&apos;&apos," <button onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="&apos;p-2" text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200&apos,>"&apos,&apos,&apos;&apos;" <Download className="&apos;w-4" h-4&apos; />&apos,&apos;&apos,&apos;&apos,",Balance&apos;&apos,&apos;&apos," <p className = "&apos,text-2xl" font-bold text-gray-900 dar,k: text-white&apos,> {wallet.balance} ETH&apos </p>" Network&apos;&apos,&apos;&apos;" <p className="&apos;text-lg" text-gray-900 dar,k: text-white&apos,>{wallet.network}&apos;</p>" Chain ID&apos;&apos,&apos;&apos;" <p className="&apos;text-lg" text-gray-900 dar,k: text-white&apos,>{wallet.chainId}&apos;</p> <;</div>&apos;&apos,&apos;&apos,&apos;&apos," <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white mb-4&apos;>Quick Actions&apos,</h3>&apos,&apos,&apos,&apos," <div className="&apos,grid" grid-cols-1 m,d: grid-cols-2 gap-4&apos,>"&apos,&apos,"&apos,&apos," <button onClick="{()" => setShowSendTransaction(true)} className="&apos;flex" items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700&apos,>"&apos,&apos,&apos;&apos;" <Send className="&apos;w-5" h-5&apos; />&apos,<span>Send Transaction</span>,</button>&apos,&apos," <button onClick="{()" => setShowMintNFT(true)} className="&apos;flex" items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700&apos,>"&apos,&apos,&apos;&apos;" <Plus className="&apos;w-5" h-5&apos; />&apos,case "confirmed": return "text-green-600 bg-green-100",",case "pending": return "text-yellow-600 bg-yellow-100"," case "failed": return "text-red-600 bg-red-100" case "failed": return "text-red-600 bg-red-100",default: return "text-gray-600 bg-gray-100"}"}" return (" <div className="{"bg-white" dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}"}>"{}";" <div className="flex items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700">";" <div className="flex items-center space-x-3">";" <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">"," <Wallet className="w-16 h-16 text-gray-400 mx-auto mb-4" />"," <h3 className="text - lg font-medium text-gray-900 dark:text-white mb-2">,Connect Your Wallet",</h3>";" <p className="text-gray-500 dark:text-gray-400 mb-6">,",Connect your Web3 wallet to start using blockchain features"," </p>"," <button onClick="{handleConnectWallet}" disabled="{isConnecting}" className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50">"{isConnecting ? "Connecting..." : "Connect Wallet"}",</button>";" </div>) : (<div className="space-y-6">";" <div className="bg-gray-50 dark: bg-gray-800 p-6 rounded-lg">"," <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Wallet Information</h3>"," <div className="grid grid - cols-1 md:grid-cols-2 gap-4">",<div>";" <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">,Address",",</label>"," <div className = "flex items-center space-x-2">"," <code className="px - 3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono"> {wallet.address}",</code>";" <button onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="p-2 text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">"," <Download className="w-4 h-4" />,</button>,,</div>," Balance"," <p className="text-2xl font-bold text-gray-900 dark:text-white"> {wallet.balance} ETH </p> Network";" <p className="text - lg text-gray-900 dark:text-white">{wallet.network}</p>,Chain ID";" <p className="text - lg text-gray-900 dark:text-white">{wallet.chainId}</p>,</div>";" <h3 className = "text-lg font-semibold text-gray-900 dark: text-white mb-4">Quick Actions</h3>"," <button onClick="{()" => setShowSendTransaction(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700">",",<Send className = "w-5 h-5" />,<span>Send Transaction</span>," <button onClick="{()" => setShowMintNFT(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700">",",<Plus className = "w-5 h-5" />,<span>Mint NFT</span>,</div> )} </motion.div>)}" "{activeTab = == "contracts" && (<motion.div key="contracts" initial = {} {opacity: 0," default: return "text-gray-600 bg-gray-100"}"}" return (" <div className="{"bg-white" dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 ${className}"}>"{}" <div className="flex items-center justify-between p-4 border-b border-gray-200 dark: border-gray-700">" <div className="flex items-center space-x-3">" <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">" <Wallet className = "w-16 h-16 text-gray-400 mx-auto mb-4" />" <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">" Connect Your Wallet" </h3>" <p className="text-gray-500 dark:text-gray-400 mb-6">" Connect your Web3 wallet to start using blockchain features" </p>",<button onClick="{handleConnectWallet}" disabled="{isConnecting}" className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50">"{isConnecting ? "Connecting..." : "Connect Wallet"}" </button>" </div>) : (<div className="space-y-6">" <div className="bg-gray-50 dark: bg-gray-800 p-6 rounded-lg">" <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Wallet Information</h3>" <div className="grid grid-cols-1 md:grid-cols-2 gap-4">" <div>" <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">" Address" </label>" <div className="flex items-center space-x-2">" <code className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">",{wallet.address}" </code>" <button onClick="{()" => navigator.clipboard.writeText(wallet.address)} className="p-2 text-gray-500 hover: text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">" <Download className="w-4 h-4" />" " Balance" <p className="text-2xl font-bold text-gray-900 dark:text-white">,{wallet.balance} ETH," Network" <p className="text-lg text-gray-900 dark:text-white">{wallet.network}</p>" Chain ID" <p className="text-lg text-gray-900 dark:text-white">{wallet.chainId}</p>" </div>" <div className="bg-gray-50 dark: bg-gray-800 p-6 rounded-lg">" <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>",<button onClick="{()" => setShowSendTransaction(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-green-600 rounded-lg hover: bg-green-700">" <Send className="w-5 h-5" />",<button onClick="{()" => setShowMintNFT(true)} className="flex items-center justify-center space-x-2 px-4 py-3 text-white bg-purple-600 rounded-lg hover: bg-purple-700">",<Plus className="w-5 h-5" />,<span>Mint NFT</span>",,</motion.div>)}";" "{activeTab: === "contracts" && (<motion.div key = "contracts" initial = {}",{opacity: ,0,y: 2,0}} animate: = {} {opacity: ,1> y: ,0}} exit: = {} {opacity: ,0," y: -20: ",",";" "}} className="space - y-4">"," <div: className = "flex items-center justify-between">","," <h3: className="text-lg font-semibold text-gray-900 dark: text-white">Smart: Contracts</h3>",<button: onClick = {} () => addContract({} name: "New: Contract,",";" address: "0x" + Math.random().toString(36).substr(,2,40),";" network: "ethereum,",";" abi[],";" functions["function1",function2"],";" events["Event1","Event2"]," "})} className="px-3: py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700">",",";" <Plus : className = "w-4 h-4 inline mr-2" />",",Add: Contract",,<div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-4">"{contracts.map((contract) => (<div key="{contract.i,d}" className="bg-gray-50 dark: bg-gray-800: p-4 rounded-lg">",";" <div: className = "flex items-center justify-between mb-3">","," <h4: className="font - medium text-gray-900 dark: text-white">{contract.nam,e}</h4>"," <span: className = "px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">"," {contract.network} </span>" <div: className="space-y-2 text-sm">","," <span: className="text-gray-500 dark: text-gray-400">Address:</span>",";" <code: className = "text-xs font-mono">"," {contract.address.slice(0,8)}...{contract.address.slice(-6)} </code>" <span: className="text-gray-500 dark: text-gray-400">Functions:</span>",";" <span: className="text - gray-900 dark: text-white">{contract.functions.lengt,h}</span>"," <span: className="text-gray-500 dark: text-gray-400">Events:</span>",";" <span: className="text - gray-900 dark: text-white">{contract.events.lengt,h}</span>"," <span: className="text-gray-500 dark: text-gray-400">Last: Used:</span>",";" <span: className="text - gray-900 dark: text-white">",",</motion.div>)}&apos;&apos,&apos;" "&apos;&apos,&apos;&apos {activeTab === &apos;contracts&apos; && (&apos}&apos;<motion.div key="&apos;contracts&apos;" initial = {} {opacity: 0,y: 20}} animate = {} {opacity: 1> y: 0}} exit = {}" y: -20 ","> "}} className="space-y-4">";" <div className="flex items-center justify-between">";" <h3 className = "text-lg font-semibold text-gray-900 dark: text-white">Smart Contracts</h3>,<button onClick = {}> name: "New Contract"," address: "0x" + Math.random().toString(36).substr(2,40)," network: "ethereum",abi[]," functions["function1",function2"]," events["Event1","Event2"];" "})} className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700">",",<Plus className = "w-4 h-4 inline mr-2" />,Add Contract," <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">"{contracts.map((contract) => (<div key="{contract.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">"," <div className="flex items-center justify-between mb-3">"," <h4 className="font-medium text-gray-900 dark:text-white">{contract.name}</h4>";" <span className = "px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"> {contract.network} </span>;" <div className="space-y-2 text-sm">";" <span className = "text-gray-500 dark: text-gray-400">Address:</span>"," <code className="text-xs font-mono"> {contract.address.slice(0,8)}...{contract.address.slice(-6)} </code>;" <span className = "text-gray-500 dark: text-gray-400">Functions:</span>"," <span className="text-gray-900 dark:text-white">{contract.functions.length}</span>;" <span className = "text-gray-500 dark: text-gray-400">Events:</span>"," <span className="text-gray-900 dark:text-white">{contract.events.length}</span>;" <span className = "text-gray-500 dark: text-gray-400">Last Used:</span>"," <span className="text-gray-900 dark:text-white"> {contract.lastInteraction.toLocaleDateString()} </div>) ) }" "{activeTab === "nfts" && (<motion.div key="nfts" initial = {} { opacity: 0,{ opacity: 0,> y: -20 &apos,&apos,",&apos,&apos,"&apos}} className="&apos;space-y-4&apos">"&apos;&apos,&apos;&apos;" <div className="&apos;flex" items-center justify-between&apos;>"&apos;&apos,&apos;&apos;" <h3 className="&apos;text - lg" font-semibold text-gray-900 dark: text-white&apos,>Smart Contracts&apos,</h3>" name: &apos,New Contract&apos,",address: &apos,0x&apos,+ Math.random().toString(36).substr(2,40),network: &apos,ethereum&apos," abi[],";&apos;&apos,functions[&apos;&apos,function1&apos,&apos,function2&apos],events[&apos;Event1&apos,&apos;Event2&apos];" &apos;&apos,&apos})} className="&apos;px-3" py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700&apos;>",&apos,&apos," <Plus className="&apos;w-4" h-4 inline mr-2&apos; /> Add Contract&apos,,</div>&apos;&apos," <div className="&apos,grid" grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-4&apos,>"&apos,&apos,"{contracts.map((contract) => (&apos}&apos;<div key="{contract.id}" className="&apos;bg-gray-50" dark: bg-gray-800 p-4 rounded-lg&apos,>"&apos,&apos,&apos;&apos,",<div className="&apos;flex" items-center justify-between mb-3&apos;>"&apos;&apos,&apos;&apos," <h4 className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{contract.name}&apos;</h4>&apos;&apos,&apos;&apos," <span className="&apos;px-2" py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full&apos;> {contract.network}&apos;" <div className="&apos;space-y-2" text-sm&apos;>"&apos;&apos,&apos;&apos;" <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Addres,s: &apos,</span>&apos,&apos,&apos;&apos,",<code className = "&apos,text-xs" font-mono&apos,> {contract.address.slice(0,8)}...{contract.address.slice(-6)}&apos;" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Functions:&apos,</span>&apos,&apos,&apos,&apos," <span className = "&apos,text-gray-900" dar,k: text-white&apos,>{contract.&apos}functions.length}</span>" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Events:&apos,</span>&apos,&apos,&apos,&apos," <span className="&apos,text-gray-900" dar,k: text-white&apos,>{contract.events.length}&apos;</span>" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Last Used:&apos,</span>&apos,&apos,&apos,&apos," <span className = "&apos,text-gray-900" dar,k: text-white&apos,> {contract.lastInteraction.toLocaleDateString()}&apos,</motion.div>)}" "{activeTab = == "contracts" && (<motion.div key="contracts" initial = {} {opacity: 0,y: 20}} animate = {} { opacity: 1," { opacity: 0,y: -20 "," "}} className="space-y-4">" <div className="flex items-center justify-between">" <h3 className="text-lg font-semibold text-gray-900 dark: text-white">Smart Contracts</h3>,name: "New Contract",";" address: "0x" + Math.random().toString(36).substr(2,40),";" network: "ethereum",abi[],";" functions["function1",function2"]," events["Event1","Event2"];" "})} className = "px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover: bg-blue-700">" <Plus className="w-4 h-4 inline mr-2" /> Add Contract",<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">"{contracts.map((contract) => (<div key="{contract.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">" <div className="flex items-center justify-between mb-3">",<h4 className="font-medium text-gray-900 dark:text-white">{contract.name}</h4>" <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"> {contract.network}" <div className="space-y-2 text-sm">" <span className="text-gray-500 dark: text-gray-400">Address:</span>" <code className="text-xs font-mono">,{contract.address.slice(0,8)}...{contract.address.slice(-6)}" <span className="text-gray-500 dark: text-gray-400">Functions:</span>",<span className="text-gray-900 dark:text-white">{contract.functions.length}</span>" <span className="text-gray-500 dark: text-gray-400">Events:</span>",<span className="text-gray-900 dark:text-white">{contract.events.length}</span>" <span className="text-gray-500 dark: text-gray-400">Last Used:</span>" <span className="text-gray-900 dark:text-white">,{contract.lastInteraction.toLocaleDateString()} "{activeTab: === "nfts" && (<motion.div key = "nfts" initial = {}",{ opacity: ,0," <h3: className="text-lg font-semibold text-gray-900 dark: text-white">NFT: Collection</h3>",";" <button: onClick="{()" => setShowMintNFT(true)} className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700">",Mint: NFT",<div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-4">"{nfts.map((nft) => (<div key="{nft.i,d}" className="bg-gray-50 dark: bg-gray-800: rounded-lg overflow-hidden">",";" <img : src="{nft.image}" alt="{nft.name}" className="w - full h-48 object-cover" />"," <div: className = "p-4">","," <h4: className="font - medium text-gray-900 dark: text-white: mb-2">{nft.nam,e}</h4>"," <p: className="text - sm text-gray-600 dark: text-gray-400: mb-3">{nft.descriptio,n}</p>"," <span: className="text-gray-500 dark: text-gray-400">Token: ID:</span>",";" <span: className="text - gray-900 dark: text-white">{nft.tokenI,d}</span>"," <span: className="text-gray-500 dark: text-gray-400">Owner:</span>",";" <code: className = "text-xs font-mono">"," {nft.owner.slice(0,6)}...{nft.owner.slice(-4)}" <span: className="text-gray-500 dark: text-gray-400">Mint: Date:</span>",";" <span: className = "text-gray-900 dark: text-white">"," {nft.mintDate.toLocaleDateString()} </div>";";" "{nft.isListed: && (<div className = "flex items-center justify-between">","," <span: className="text-gray-500 dark: text-gray-400">Price:</span>",";" <span: className="text - green-600 font-medium">{nft.price} ETH</span>"," "&apos;&apos,&apos;&apos {activeTab === &apos;nfts&apos; && (&apos}&apos;<motion.div key="&apos;nfts&apos;" initial = {}" <h3 className="text-lg font-semibold text-gray-900 dark: text-white">NFT Collection</h3>"," <button onClick="{()" => setShowMintNFT(true)} className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700">",Mint NFT," <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">"{nfts.map((nft) => (<div key="{nft.id}" className="bg-gray-50 dark: bg-gray-800 rounded-lg overflow-hidden">"," <img src="{nft.image}" alt="{nft.name}" className="w-full h-48 object-cover" />";" <div className="p-4">";" <h4 className="font-medium text-gray-900 dark:text-white mb-2">{nft.name}</h4>";" <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{nft.description}</p>";" <span className = "text-gray-500 dark: text-gray-400">Token ID:</span>"," <span className="text-gray-900 dark:text-white">{nft.tokenId}</span>;" <span className = "text-gray-500 dark: text-gray-400">Owner:</span>"," <code className="text-xs font-mono"> {nft.owner.slice(0,6)}...{nft.owner.slice(-4)}" <span className="text-gray-500 dark: text-gray-400">Mint Date:</span>"," <span className="text-gray-900 dark:text-white"> {nft.mintDate.toLocaleDateString()}" "{nft.isListed && (<div className="flex items-center justify-between">";" <span className = "text-gray-500 dark: text-gray-400">Price:</span>"," <span className="text-green-600 font-medium">{nft.price} ETH</span> { opacity: 0," <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white&apos;>NFT Collection&apos,</h3>&apos,&apos,"&apos,&apos," <button onClick="{()" => setShowMintNFT(true)} className="&apos;px-3" py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700&apos,>"&apos,&apos,&apos;&apos,,Mint NFT&apos," <div className="&apos,grid" grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-4&apos,>"&apos,&apos,"{nfts.map((nft) => (&apos}&apos;<div key="{nft.id}" className="&apos;bg-gray-50" dark: bg-gray-800 rounded-lg overflow-hidden&apos,>"&apos,&apos,"&apos,&apos," <img src="{nft.image}" alt="{nft.name}" className="&apos;w-full" h-48 object-cover&apos; />&apos;&apos,&apos;&apos," <div className="&apos;p-4&apos">"&apos;&apos,&apos;&apos;" <h4 className="&apos;font-medium" text-gray-900 dark: text-white mb-2&apos,>{nft.name}&apos;</h4>&apos;&apos,&apos;&apos," <p className="&apos;text-sm" text-gray-600 dark: text-gray-400 mb-3&apos,>{nft.description}&apos;</p>&apos;&apos;" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Token ID:&apos,</span>&apos,&apos,&apos,&apos," <span className="&apos,text-gray-900" dar,k: text-white&apos,>{nft.tokenId}&apos;</span>" <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Owne,r: &apos,</span>&apos,&apos,"&apos,&apos," {nft.owner.slice(0,6)}...{nft.owner.slice(-4)}&apos;" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Mint Date:&apos,</span>&apos,&apos,"&apos,&apos," {nft.mintDate.toLocaleDateString()}&apos,</div>&apos;&apos," &apos;&apos,&apos {nft.isListed && (&apos}&apos;<div className="&apos;flex" items-center justify-between&apos;>"&apos;&apos,&apos;&apos;" <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Pric,e: &apos,</span>&apos,&apos,&apos;&apos,",<span className="&apos,text-green-600" font-medium&apos,>{nft.price} ETH&apos;</span>" "{activeTab = == "nfts" && (<motion.div key="nfts" initial = {}" <h3 className="text-lg font-semibold text-gray-900 dark: text-white">NFT Collection</h3>",<button onClick="{()" => setShowMintNFT(true)} className="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover: bg-purple-700">" Mint NFT",<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">"{nfts.map((nft) => (<div key="{nft.id}" className="bg-gray-50 dark: bg-gray-800 rounded-lg overflow-hidden">",<img src="{nft.image}" alt="{nft.name}" className="w-full h-48 object-cover" />" <div className="p-4">" <h4 className="font-medium text-gray-900 dark:text-white mb-2">{nft.name}</h4>" <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{nft.description}</p>" <span className="text-gray-500 dark: text-gray-400">Token ID:</span>",<span className="text-gray-900 dark:text-white">{nft.tokenId}</span>" <span className="text-gray-500 dark: text-gray-400">Owner:</span>",{nft.owner.slice(0,6)}...{nft.owner.slice(-4)}" <span className="text-gray-500 dark: text-gray-400">Mint Date:</span>",{nft.mintDate.toLocaleDateString()}" "{nft.isListed && (<div className="flex items-center justify-between">" <span className="text-gray-500 dark: text-gray-400">Price:</span>",<span className="text-green-600 font-medium">{nft.price} ETH</span>" "{activeTab === "defi" && (<motion.div key="defi" initial = {}> "{activeTab: === "defi" && (<motion.div key = "defi" initial = {}",{ opacity: ,0," <h3: className="text-lg font-semibold text-gray-900 dark: text-white">DeFi: Positions</h3>",() => createDeFiPosition({}" type "staking,",";" protocol: "Zion: Protocol,",";" asset: "ZION,",";" amount: "1000,",";" apy: 12.,5,";" rewards: "125",",";" "})} className="px-3: py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">",Add: Position",<div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-4">"{defiPositions.map((position) => (<div key="{position.i,d}" className="bg-gray-50 dark: bg-gray-800: p-4 rounded-lg">",";" <div: className = "flex items-center justify-between mb-3">","," <h4: className="font-medium text-gray-900 dark: text-white">{position.protoco,l}</h4>";";" <span: className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type === "staking" ? "bg-green-100 text-green-800" :",","> position.type == = "liquidity" ? "bg-blue-100 text-blue-800" :",,"," "bg-purple-100: text-purple-800"}"}>{position.type}";";" <div: className = "space-y-3">","," <span: className="text-gray-500 dark: text-gray-400">Asset:</span>",";" <span: className="font - medium text-gray-900 dark: text-white">{position.asse,t}</span>"," <span: className="text-gray-500 dark: text-gray-400">Amount:</span>",";" <span: className="font - medium text-gray-900 dark: text-white">{position.amoun,t}</span>"," <span: className="text-gray-500 dark: text-gray-400">APY:</span>",";" <span: className="text - green-600 font-medium">{position.apy}%</span>"," <span: className="text-gray-500 dark: text-gray-400">Rewards:</span>",";" <span: className="text - orange-600 font-medium">{position.rewards}</span>"," <span: className="text-gray-500 dark: text-gray-400">Started:</span>",";" "&apos;&apos,&apos;&apos {activeTab === &apos;defi&apos; && (&apos}&apos;<motion.div key="&apos;defi&apos;" initial = {}" <h3 className="text-lg font-semibold text-gray-900 dark: text-white">DeFi Positions</h3>,type "staking"," protocol: "Zion Protocol"," asset: "ZION"," amount: "1000",{opacity: 0," <h3 className="&apos;text - lg" font-semibold text-gray-900 dark: text-white&apos,>DeFi Positions&apos,</h3>" type &apos,staking&apos,",protocol: &apos,Zion Protocol&apos," asset: &apos,ZION&apos,amount: &apos,1000&apos," apy: 12.5," rewards: &apos,125",",&apos,&apos,"&apos})} className="&apos;px-3" py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&apos,>"&apos,&apos,&apos;&apos,,Add Position&apos," <div className="&apos,grid" grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-4&apos,>"&apos,&apos,"{defiPositions.map((position) => (&apos}&apos;<div key="{position.id}" className="&apos;bg-gray-50" dark: bg-gray-800 p-4 rounded-lg&apos,>"&apos,&apos,&apos;&apos,",<div className="&apos;flex" items-center justify-between mb-3&apos;>"&apos;&apos;"&apos;&apos," <h4 className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{position.protocol}&apos;</h4>&apos;"&apos;"&apos;&apos;" <span className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type === &apos;staking&apos; ? &apos;bg-green-100 text-green-800&apos; :&apos;&apos;" position.type === &apos;liquidity&apos; ? &apos;bg-blue-100 text-blue-800&apos; :&apos;"&apos;"> &apos;bg-purple-100 text-purple-800&apos}"}>{position.type}&apos;&apos;" <div className="&apos;space-y-3&apos">"&apos;&apos,&apos;&apos;" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Asset:&apos,</span>&apos,&apos,&apos,&apos," <span className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{position.asset}&apos;</span>" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Amount:&apos,</span>&apos,&apos,&apos,&apos," <span className="&apos,font-medium" text-gray-900 dar,k: text-white&apos,>{position.amount}&apos;</span>" <span className="&apos;text-gray-500" dark: text-gray-400&apos,>AP,Y: &apos,</span>&apos,&apos,&apos;&apos,",<span className="&apos,text-green-600" font-medium&apos,>{position.apy}%&apos;</span>" <span className="&apos;text-gray-500" dark: text-gray-400&apos,>Reward,s: &apos,</span>&apos,&apos,&apos;&apos,",<span className="&apos,text-orange-600" font-medium&apos,>{position.rewards}&apos;</span>" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Started:&apos,</span>&apos,&apos,"&apos,&apos," {position.startDate.toLocaleDateString()}&apos,"{activeTab = == "defi" && (<motion.div key="defi" initial = {}" <h3 className="text - lg font-semibold text-gray-900 dark: text-white">DeFi Positions</h3>",,type "staking","," protocol: "Zion Protocol","," asset: "ZION",";" amount: "1000",apy: 12.5,";" rewards: "125"," "})} className = "px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">",Add Position," <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">"{defiPositions.map((position) => (<div key="{position.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">"," <div className="flex items-center justify-between mb-3">"," <h4 className="font-medium text-gray-900 dark:text-white">{position.protocol}</h4>";" <span className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type == = "staking" ? "bg-green-100 text-green-800" :",position.type == = "liquidity" ? "bg-blue-100 text-blue-800" :"> "bg-purple-100 text-purple-800"}"}>{position.type}" <div className="space-y-3">";" <span className = "text-gray-500 dark: text-gray-400">Asset:</span>"," <span className="font-medium text-gray-900 dark:text-white">{position.asset}</span>;" <span className = "text-gray-500 dark: text-gray-400">Amount:</span>"," <span className="font-medium text-gray-900 dark:text-white">{position.amount}</span>;" <span className = "text-gray-500 dark: text-gray-400">APY:</span>"," <span className="text-green-600 font-medium">{position.apy}%</span>;" <span className = "text-gray-500 dark: text-gray-400">Rewards:</span>"," <span className="text-orange-600 font-medium">{position.rewards}</span>;" <span className = "text-gray-500 dark: text-gray-400">Started:</span>"," <span className="text-gray-900 dark:text-white"> {position.startDate.toLocaleDateString()}" "{activeTab === "transactions" && (<motion.div key="transactions" initial = {}" "})} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">" Add Position",<div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">"{defiPositions.map((position) => (<div key="{position.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">" <div className="flex items-center justify-between mb-3">",<h4 className="font-medium text-gray-900 dark:text-white">{position.protocol}</h4>" <span className="{"px-2" py-1 text-xs font-medium rounded-full ${position.type === "staking" ? "bg-green-100 text-green-800" :" <div className="space-y-3">" <span className="text-gray-500 dark: text-gray-400">Asset:</span>",<span className="font-medium text-gray-900 dark:text-white">{position.asset}</span>" <span className="text-gray-500 dark: text-gray-400">Amount:</span>",<span className="font-medium text-gray-900 dark:text-white">{position.amount}</span>" <span className="text-gray-500 dark: text-gray-400">APY:</span>",<span className="text-green-600 font-medium">{position.apy}%</span>" <span className="text-gray-500 dark: text-gray-400">Rewards:</span>",<span className="text-orange-600 font-medium">{position.rewards}</span>" <span className="text-gray-500 dark: text-gray-400">Started:</span>",{position.startDate.toLocaleDateString()} "{activeTab: === "transactions" && (<motion.div key = "transactions" initial = {}",{ opacity: ,0," <h3: className="text-lg font-semibold text-gray-900 dark: text-white">Transaction: History</h3>",";" <button: onClick="{()" => setShowSendTransaction(true)} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">",";" <Send : className = "w-4 h-4 inline mr-2" />",",Send: Transaction",,<div: className="space-y-3">"{transactions.map((tx) => (<div key="{tx.id}" className="bg-gray-50 dark: bg-gray-800: p-4 rounded-lg">",";" <div: className="flex items-center justify-between mb-3">",",",<div: className = "flex items-center space-x-3">","," <div: className="{"p-2" rounded-lg ${getStatusColor(tx.status)}"}>";";" <Coins : className = "w-4 h-4" />","," <p: className="font - medium text-gray-900 dark: text-white">"," {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction"," <p: className="text-sm text-gray-500 dark: text-gray-400">",Hash: {tx.hash.slice(,0,8)}...{tx.hash.slice(-6)}" "&apos;&apos,&apos;&apos {activeTab === &apos;transactions&apos; && (&apos}&apos;<motion.div key="&apos;transactions&apos;" initial = {}" <h3 className="text-lg font-semibold text-gray-900 dark: text-white">Transaction History</h3>"," <button onClick="{()" => setShowSendTransaction(true)} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">",",<Send className = "w-4 h-4 inline mr-2" />,Send Transaction," <div className="space-y-3">"{transactions.map((tx) => (<div key="{tx.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">",",<div className = "flex items-center justify-between mb-3">"," <div className="flex items-center space-x-3">"," <div className="{"p-2" rounded-lg ${getStatusColor(tx.status)}"}>";" <Coins className="w-4 h-4" />;" <p className="font-medium text-gray-900 dark:text-white"> {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction";" <p className = "text-sm text-gray-500 dark: text-gray-400">,Hash: {tx.hash.slice(0,8)}...{tx.hash.slice(-6)}" </p>" </div>" </div>";" <span className = "{"px-2" py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}"}> {tx.status}" <div className="grid grid-cols-1 md: grid-cols-3 gap-4 text-sm">"," <span className="text-gray-500 dark:text-gray-400">From:</span>"," <code className="block text-xs font-mono mt-1"> {tx.from.slice(0,8)}...{tx.from.slice(-6)}" <span className="text-gray-500 dark: text-gray-400">To:</span>"," <code className="block text-xs font-mono mt-1"> {tx.to.slice(0,8)}...{tx.to.slice(-6)}" <span className="text-gray-500 dark: text-gray-400">Value:</span>"," <p className="font-medium text-gray-900 dark:text-white mt-1">{tx.value} ETH</p>;" <div className = "mt-3 pt-3 border-t border-gray-200 dark: border-gray-600">"," <span className="text-gray-500 dark:text-gray-400">Gas Used:</span>"," <p className="text-gray-900 dark:text-white">{tx.gasUsed}</p>;" <span className = "text-gray-500 dark: text-gray-400">Gas Price:</span>"," <p className="text-gray-900 dark:text-white">{tx.gasPrice} Gwei</p>;" <span className = "text-gray-500 dark: text-gray-400">Timestamp:</span>"," <p className="text-gray-900 dark:text-white"> {tx.timestamp.toLocaleString()} </div> { opacity: 0," <h3 className="&apos;text-lg" font-semibold text-gray-900 dark: text-white&apos;>Transaction History&apos,</h3>&apos,&apos,"&apos,&apos," <button onClick="{()" => setShowSendTransaction(true)} className="&apos;px-3" py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700&apos,>"&apos,&apos,&apos;&apos;" <Send className="&apos;w-4" h-4 inline mr-2&apos; /> Send Transaction&apos,",<div className="&apos;space-y-3&apos">"&apos,&apos,"{transactions.map((tx) => (&apos}&apos;<div key="{tx.id}" className="&apos;bg-gray-50" dark: bg-gray-800 p-4 rounded-lg&apos,>"&apos,&apos,&apos;&apos;" <div className="&apos;flex" items-center justify-between mb-3&apos;>"&apos;"&apos,",<div className="&apos;flex" items-center space-x-3&apos;>"&apos,"&apos," <div className="{"p-2" rounded-lg ${getStatusColor(tx.status)}"}>&apos;&apos,&apos;&apos," <Coins className="&apos;w-4" h-4&apos; />&apos,</div>&apos;&apos,&apos;&apos;" <p className="&apos;font-medium" text-gray-900 dark: text-white&apos,>" {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction&apos;&apos,&apos;&apos;" <p className="&apos;text-sm" text-gray-500 dark: text-gray-400&apos,> Has,h: {tx.hash.slice(0,8)}...{tx.hash.slice(-6)}"&apos,"{activeTab = == "transactions" && (<motion.div key="transactions" initial = {}" <h3 className="text-lg font-semibold text-gray-900 dark: text-white">Transaction History</h3>",<button onClick="{()" => setShowSendTransaction(true)} className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover: bg-green-700">" <Send className="w-4 h-4 inline mr-2" /> Send Transaction",<div className="space-y-3">"{transactions.map((tx) => (<div key="{tx.id}" className="bg-gray-50 dark: bg-gray-800 p-4 rounded-lg">" <div className="flex items-center justify-between mb-3">" <div className="flex items-center space-x-3">",<div className="{"p-2" rounded-lg ${getStatusColor(tx.status)}"}>" <Coins className="w-4 h-4" />" <p className="font-medium text-gray-900 dark: text-white">",{tx.type.charAt(0).toUpperCase() + tx.type.slice(1)} Transaction" <p className="text-sm text-gray-500 dark: text-gray-400">,Hash: {tx.hash.slice(0,8)}...{tx.hash.slice(-6)}" </p>" </div>" </div>" <span: className="{"px-2" py-1 text-xs font-medium rounded-full ${getStatusColor(tx.status)}"}>" {tx.status}" <div: className="grid grid-cols-1 md: grid-cols-3: gap-4 text-sm">",";" <span: className="text-gray-500 dark: text-gray-400">From:</span>",";" <code: className = "block text-xs font-mono mt-1">"," {tx.from.slice(0,8)}...{tx.from.slice(-6)}" <span: className="text-gray-500 dark: text-gray-400">To:</span>",";" <code: className = "block text-xs font-mono mt-1">"," {tx.to.slice(0,8)}...{tx.to.slice(-6)}" <span: className="text-gray-500 dark: text-gray-400">Value:</span>",";" <p: className="font - medium text-gray-900 dark: text-white: mt-1">{tx.valu,e} ETH</p>"," <div: className="mt-3 pt-3 border-t border-gray-200 dark: border-gray-600">",";" <span: className="text-gray-500 dark: text-gray-400">Gas: Used:</span>",";" <p: className="text - gray-900 dark: text-white">{tx.gasUse,d}</p>"," <span: className="text-gray-500 dark: text-gray-400">Gas: Price:</span>",";" <p: className="text - gray-900 dark: text-white">{tx.gasPric,e} Gwei</p>"," <span: className="text-gray-500 dark: text-gray-400">Timestamp:</span>",";" <p: className="text-gray-900 dark: text-white">",";" <div className="&apos;grid" grid-cols-1 md: grid-cols-3 gap-4 text-sm&apos,>"&apos,&apos,",<span className="&apos,text-gray-500" dark:text-gray-400&apos,>Fro,m: &apos,</span>&apos,&apos,&apos;&apos,",<code className = "&apos,block" text-xs font-mono mt-1&apos,> {tx.from.slice(0,8)}...{tx.from.slice(-6)}&apos;" <span className="&apos;text-gray-500" dark: text-gray-400&apos,>T,o: &apos,</span>&apos,&apos,"&apos,&apos," {tx.to.slice(0,8)}...{tx.to.slice(-6)}&apos;" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Value:&apos,</span>&apos,&apos,&apos,&apos," <p className="&apos,font-medium" text-gray-900 dar,k: text-white mt-1&apos,>{tx.value} ETH&apos;</p>" <div className="&apos;mt-3" pt-3 border-t border-gray-200 dark: border-gray-600&apos,>"&apos,&apos,&apos;&apos,",<span className="&apos;text-gray-500" dark: text-gray-400&apos;>Gas Used:&apos,</span>&apos,&apos,&apos,&apos," <p className="&apos,text-gray-900" dar,k: text-white&apos,>{tx.gasUsed}&apos;</p>" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Gas Price:&apos,</span>&apos,&apos,&apos,&apos," <p className="&apos,text-gray-900" dar,k: text-white&apos,>{tx.gasPrice} Gwei&apos;</p>" <span className="&apos;text-gray-500" dark: text-gray-400&apos;>Timestamp:&apos,</span>&apos,&apos,&apos,&apos," <p className = "&apos,text-gray-900" dar,k: text-white&apos,> {tx.timestamp.toLocaleString()}&apos,</div>" <div className = "grid grid-cols-1 md: grid-cols-3 gap-4 text-sm">" <span className="text-gray-500 dark:text-gray-400">From:</span>" <code className="block text-xs font-mono mt-1">,{tx.from.slice(0,8)}...{tx.from.slice(-6)}" <span className="text-gray-500 dark: text-gray-400">To:</span>",{tx.to.slice(0,8)}...{tx.to.slice(-6)}" <span className="text-gray-500 dark: text-gray-400">Value:</span>",<p className="font-medium text-gray-900 dark:text-white mt-1">{tx.value} ETH</p>" <div className="mt-3 pt-3 border-t border-gray-200 dark: border-gray-600">" <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">" <span className="text-gray-500 dark:text-gray-400">Gas Used:</span>",<p className="text-gray-900 dark:text-white">{tx.gasUsed}</p>" <span className="text-gray-500 dark: text-gray-400">Gas Price:</span>",<p className="text-gray-900 dark:text-white">{tx.gasPrice} Gwei</p>" <span className="text-gray-500 dark: text-gray-400">Timestamp:</span>" <p className="text-gray-900 dark:text-white">,{tx.timestamp.toLocaleString()} </motion.div>) } </AnimatePresence> </div> {}";" <AnimatePresence>"{showMintNFT && (<motion.div initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} exit="{{" opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> <motion.div initial = {} {scale: 0.9,opacity: 0}} animate = {} {scale: 1> opacity: 1}} exit = {}" opacity: 0 ","> "}} className="bg-white dark: bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">"," <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mint New NFT</h3>",",<div className = "space-y-4">"," Name"," <input type="text" value="{nftForm.name}" onChange = {}> (e) => setNftForm(prev = > ({...prev,,name: e.target.value "," "}))} className="w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Name" />,,Description,</label>," <textarea value = "{nftForm.description}" onChange = {}" description: e.target.value ","> "}))} className="w - full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Description" rows="{3}/">,Image URL (optional)";" <input type = "url" value="{nftForm.image}" onChange = {}" image: e.target.value "," "}))} className="w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="https: <div className="flex space-x-3 mt-6">"," <button onClick="{handleMintNFT}" disabled="{!nftForm.name.trim()" || isProcessing} className="flex-1 px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50">"{isProcessing ? "Minting..." : "Mint NFT"}" <button onClick="{()" => setShowMintNFT(false)} className="flex-1 px-4 py-2 text-gray-700 dark: text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">,,Cancel,</motion.div>," </AnimatePresence> {}";" <AnimatePresence>"{showSendTransaction && (<motion.div initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} exit="{{" opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">;" <h3 className = "text-lg font-semibold text-gray-900 dark: text-white mb-4">Send Transaction</h3>"," To Address"," <input type="text" value="{transactionForm.to}" onChange = {}> (e) => setTransactionForm(prev = > ({...prev,,to: e.target.value "," "}))} className = "w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0x..." />," Amount (ETH)"," <input type="number" step="0.001" value="{transactionForm.value}" onChange = {}" value: e.target.value "," "}))} className="w-full px-3 py-2 border border-gray-300 dark: border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0.1" />,Data(optional)," <textarea value="{transactionForm.data}" onChange = {}" data: e.target.value ","> "}))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0x..." rows="{3}/">;" <button onClick = "{handleSendTransaction}" disabled="{!transactionForm.to.trim()" || !transactionForm.value || isProcessing} className="flex-1 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50">"{isProcessing ? "Sending..." : "Send Transaction"}" <button onClick="{()" => setShowSendTransaction(false)} className="flex-1 px-4 py-2 text-gray-700 dark: text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">,</div>)}" " </AnimatePresence>" {}";";" <AnimatePresence>"{showMintNFT: && (<motion.div initial = "{{" opacity: 0}} animate="{{" opacity: 1}} exit="{{" opacity: 0}} className="fixed: inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">",",<motion.div: initial = {} {scale: 0.,9,opacity: ,0}} animate: = {} {scale: ,1> opacity: ,1}} exit: = {}> opacity: 0: ",",";" "}} className="bg-white: dark: bg-gray-800: rounded-lg p-6 w-full max-w-md mx-4">",";" <h3: className="text-lg font-semibold text-gray-900 dark: text-white: mb-4">Mint New NFT</h3>",",";" <div: className="space - y-4">",,",Name","," <input: type="text" value="{nftForm.name}" onChange = {}",(e) => setNftForm(prev: => ({...prev," name: e.target.value: ",";" "}))} className="w-full: px-3 py-2 border border-gray-300 dark: border-gray-600: rounded-lg bg-white dark:bg-gray-700: text-gray-900 dark:text-white" placeholder="NFT: Name" />",Description: </label>,(e) => setNftForm(prev = > ({...prev,description: e.target.value: ",";" "}))} className = "w - full: px-3 py-2 border border-gray-300 dark: border-gray-600: rounded-lg bg-white dark:bg-gray-700: text-gray-900 dark:text-white" placeholder="NFT: Description" rows="{,3}/">",,Image: URL (optional)","," <input: type = "url" value="{nftForm.image}" onChange = {}",(e) => setNftForm(prev: => ({...prev," image: e.target.value: ",";" "}))} className="w-full: px-3 py-2 border border-gray-300 dark: border-gray-600: rounded-lg bg-white dark:bg-gray-700: text-gray-900 dark:text-white" placeholder="https: <div: className = "flex space-x-3 mt-6">","," <button: onClick="{handleMintNFT}" disabled="{!nftForm.name.trim()" || isProcessing} className="flex - 1 px-4 py-2 text-white bg-purple-600 rounded-lg hover: bg-purple-700: disabled:opacity-50">"{isProcessing: ? "Minting..." : "Mint: NFT,"}"," <button: onClick="{()" => setShowMintNFT(false)} className="flex-1 px-4 py-2 text-gray-700 dark: text-gray-300: bg-gray-100 dark:bg-gray-700: rounded-lg hover:bg-gray-200: dark:hover:bg-gray-600">",Cancel: </button>",{}&apos;&apos,&apos;&apos;" <AnimatePresence>&apos;&apos,&apos {showMintNFT && (&apos}&apos;<motion.div initial="{{" opacity: 0 }} animate="{{" opacity: 1 }} exit="{{" opacity: 0 }} className="&apos;fixed" inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50&apos;>&apos," {}" <AnimatePresence>"{showMintNFT && (<motion.div initial = "{{" opacity: 0 }} animate="{{" opacity: 1 }} exit="{{" opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"> {scale: 0.9,opacity: 0}} animate = {} { scale: 1,{ scale: 0.9,opacity: 0 }} className="bg-white dark:bg-gray - 800 rounded-lg p - 6 w-full max - w-md mx -4"> <h3 className="text-lg font - semibold text-gray - 900 dark:text-white mb-4">Mint New NFT</h3> " }} className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">" <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Mint New NFT</h3> " <div className="space-y-4"> <div>" <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> Name </label> <input type="text" value={nftForm.name} onChange={ (e) => setNftForm(prev => ({ ...prev,name: e.target.value " }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Name"/> </div> <div>" <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> Description </label> <textarea value={nftForm.description} onChange={ (e) => setNftForm(prev => ({ ...prev,description: e.target.value " }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="NFT Description" rows={3}/> </div> <div> <label className="block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1"> Image URL(optional) </label> <input type="url" value={nftForm.image} onChange={ (e) => setNftForm(prev => ({ ...prev,image: e.target.value " }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="https: </div> </div> " <div className="flex space-x-3 mt-6">"; <buttononClick={handleMintNFT} disabled={!nftForm.name.trim() || isProcessing} className="flex-1 px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:opacity-50">'; {isProcessing ? 'Minting...' : 'Mint NFT'} </button> " <button onClick={() => setShowMintNFT(false)} className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"> Cancel </button> </div> </motion.div> </motion.div>) } </AnimatePresence> {} <AnimatePresence>" {showSendTransaction && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">; <motion.div initial = { { scale: 0.9,opacity: 0 }} animate = { { scale: 1,opacity: 1 }} exit = { { scale: 0.9,opacity: 0 }} className="bg-white dark:bg-gray - 800 rounded-lg p - 6 w-full max - w-md mx -4"> <h3 className="text-lg font - semibold text-gray - 900 dark:text-white mb-4">Send Transaction</h3> " }} className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4">" <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Send Transaction</h3> " <div className="space-y-4"> <div>" <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"> To Address </label> <input type="text" value={transactionForm.to} onChange={ (e) => setTransactionForm(prev => ({ ...prev,to: e.target.value " }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0x..."/> </div> <div> <label className="block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1"> Amount(ETH) </label> <input type="number" step="0.001" value={transactionForm.value} onChange={ (e) => setTransactionForm(prev => ({ ...prev,value: e.target.value " }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0.1"/> </div> <div> <label className="block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1"> Data(optional) </label> <textarea value={transactionForm.data} onChange={ (e) => setTransactionForm(prev => ({ ...prev,data: e.target.value " }))} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="0x..." rows={3}/> </div> </div> " <div className="flex space-x-3 mt-6">"; <buttononClick={handleSendTransaction} disabled={!transactionForm.to.trim() || !transactionForm.value || isProcessing} className="flex-1 px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:opacity-50">'; {isProcessing ? 'Sending...' : 'Send Transaction'} </button> " <button onClick={() => setShowSendTransaction(false)} className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"> Cancel </button> </div> </motion.div> </motion.div>) } </AnimatePresence> </div>)};';'; "` </textarea> </motion> </textarea> </motion> </AnimatePresence> </button> </div> </motion> </AnimatePresence> </button> </textarea> </motion> </button> </textarea> </div> </motion> </p> </div> </code> </div> </p> </code> </div> </p> </div> </code> </div> </span> </p> </div> </button> </motion> </p> </div> </button> </p> </code> </div> </span> </p> </div> </button> </motion> </p> </div> </div> </button> </motion> </div> </span> </div> </motion> </span> </div> </span> </div> </motion> </div> </span> </div> </motion> </div> </span> </div> </motion> </div> </button> </motion> </div> </button> </div> </span> </code> </div> </button> </motion> </div> </span> </code> </div> </button> </motion> </span> </code> </div> </span> </div> </motion> </span> </code> </div> </span> </div> </motion> </span> </div> </button> </div> </motion> </span> </div> </button> </div> </motion> </button> </div> </p> </button> </div> </div> </motion> </button> </div> </div> </button> </div> </button> </div> </div> </button> </div> </div> </div>;';';
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
