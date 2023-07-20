const symbols = {
  symbols: [
    {
      proName: "FOREXCOM:SPXUSD",
      title: "S&P 500",
    },
    {
      proName: "FOREXCOM:NSXUSD",
      title: "US 100",
    },
    {
      proName: "FX_IDC:EURUSD",
      title: "EUR/USD",
    },
    {
      proName: "BITSTAMP:BTCUSD",
      title: "Bitcoin",
    },
    {
      proName: "BITSTAMP:ETHUSD",
      title: "Ethereum",
    },
  ],
  showSymbolLogo: true,
  colorTheme: "light",
  isTransparent: false,
  displayMode: "adaptive",
  locale: "en",
};

window.addEventListener("DOMContentLoaded", () => {
  new window.TradingView.widget({
    symbol: symbols.symbols.map((s) => s.proName).join(","),
    interval: "1",
    timezone: "Etc/UTC",
    theme: symbols.colorTheme,
    style: "1",
    locale: symbols.locale,
    toolbar_bg: "#f1f3f6",
    enable_publishing: false,
    hide_side_toolbar: false,
    allow_symbol_change: true,
    save_image: false,
    container_id: "tradingview-widget-container__widget",
  });
});
