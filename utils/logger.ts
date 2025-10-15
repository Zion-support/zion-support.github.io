
interface LoggerConfig {
  enableConsole: boolean
  enableRemote: boolean
  remoteEndpoint?: string,
}
class Logger {
  constructor(config: LoggerConfig = { enableConsole: true, enableRemote: false }) {
    this.config = config
  }
  private formatMessage(level: LogLevel, message: string): string {
    return `[${timestamp}] [${level.toUpperCase()}] ${message}`
  }

  log(message: string, ...args: any[]): void {
    if (this.shouldLog()) {"
      console.log(this.formatMessage('log'
      console.info(this.formatMessage('info'
      console.warn(this.formatMessage('warn'
    console.error(this.formatMessage('error'
      this.sendToRemote('error'
      console.debug(this.formatMessage('debug'