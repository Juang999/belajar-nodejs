import winston from "winston"

test("test format logging", () => {
	const logger = winston.createLogger({
		level: 'silly',
		format: winston.format.printf( log => {
			return `${new Date()} : ${log.level} : ${log.message}`
		}),
		// format: winston.format.logstash(),
		transports: [
				new winston.transports.Console({})
			]
	})

	logger.info("hello world")
})