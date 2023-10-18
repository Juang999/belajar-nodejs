import winston from "winston"
import moment from "moment"

test("combine logger", () => {
	const logger = winston.createLogger({
		level: 'silly',
		format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.ms(),
				winston.format.printf(log => {
					return `${moment(log.timestamp).format("YYYY-MM-DD HH:mm:ss")} : ${log.level.toUpperCase()} : ${log.message}`
				})
			),
		transports: [
				new winston.transports.Console({}),
				new winston.transports.File({
					filename: 'express.log'
				})
			]
	})

	logger.info("Hello Info")
	logger.error("Hello error")
	logger.debug("Hello debug")
})