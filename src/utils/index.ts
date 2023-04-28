// 获取地址上的参数

export const getParams = (key: string): unknown => {
	const url = location.href;
	const queryStr = url.slice(url.indexOf('?') + 1);
	const paramsObj: Record<string, unknown> = {};

	const paramsList = queryStr.split('&');

	for (const param of paramsList) {
		const [key, value] = param.split('=');
		paramsObj[key] = encodeURIComponent(value);
	}
	return paramsObj[key];
};
