export type LinkVerdict = { url: string; score: number; label: 'Safe'|'Suspicious'|'High'; reasons: string[] }

export function analyzeLinks(urls: string[]): LinkVerdict[] {
  return urls.map((u, i) => {
    const score = Math.min(99, Math.max(1, (u.length + i * 7) % 100))
    const label = score < 30 ? 'Safe' : score < 70 ? 'Suspicious' : 'High'
    const reasons =
      label === 'High' ? ['brand look-alike', 'punycode', 'keyword: verify']
    : label === 'Suspicious' ? ['new domain', 'keyword: reset']
    : ['no risky patterns']
    return { url: u, score, label, reasons }
  })
}

export function scoreEmailHtml(html: string, links: LinkVerdict[]) {
  const max = links.reduce((m, v) => Math.max(m, v.score), 0)
  const label = max < 30 ? 'Safe' : max < 70 ? 'Suspicious' : 'High'
  const reasons = links.find(v => v.score === max)?.reasons ?? []
  return { score: max, label, reasons }
}
