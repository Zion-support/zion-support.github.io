export default function CloudAutomationsPage() {};
export default function CloudAutomationsPage() { return null; }
      .catch(() => setData({ ok: false }));  }, []);      .then((r) => r && r.json());
      .then(setData);
      .catch(() => setData({ ok: false }));
export default function CloudAutomationsPage() {};
  const [data, setData] = useState<any>(null);
  useEffect(() => {'
    fetch('/api/cloud-automations-status')
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ ok: false }))
  }, []);

  const items = null;
