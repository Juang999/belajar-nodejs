import winston from "winston"
import moment from "moment"
import DailyRotateFile from "winston-daily-rotate-file"

test("logging with rotate file", () => {
	const logger = winston.createLogger({
		level: 'info',
		format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.ms(),
				winston.format.printf(log => {
					return `${moment(log.timestamp).format("YYYY-MM-DD HH:mm:ss")} : ${log.level.toUpperCase()} : ${log.message}`
				})
			),
		transports: [
				new winston.transports.Console({}),
				new DailyRotateFile({
					filename: "app-%DATE%.log",
					zippedArcive: true,
					maxSize: "1m",
					maxFiles: "14d"
				})
			]
	})

	for (var i = 0; i < 100000; i++) {
		logger.info(`Hello Info ${i}`)
	}

})