import { useOf } from "@storybook/blocks"
import { assertedStoryOf } from "./types"

import { APIFunction, APIValue, Meta } from "../../src/types/Control"

const API = () => {
	const { story } = useOf("story") as assertedStoryOf
	const metadata: Meta = story.parameters!.metadata

	const functions = metadata.api.filter(({ apiType }) => apiType === "function") as APIFunction[]

	const values = metadata.api.filter(({ apiType }) => apiType === "value") as APIValue[]

	if (!functions.length && !values.length) return null

	return (
		<>
			<h2>API</h2>

			{functions.length > 0 && (
				<>
					<h3>Functions</h3>

					<style>{`
						.custom-table th {
							border: none !important;
							font-size: 14px !important
						}
						.custom-table tr {
							border: none !important;
						}
						.custom-table td {
							border: none !important;
						}
					`}</style>

					<table className="custom-table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Description</th>
								<th>Required</th>
								<th>Return type</th>
								<th>Arg name</th>
								<th>description</th>
								<th>type</th>
								<th>default value</th>
								<th>required</th>
							</tr>
						</thead>
						<tbody>
							{functions.map(({ name, description, required, args, returnType }) => (
								<tr key={name}>
									<td>{name}</td>
									<td>{description}</td>
									<td>{required ? "Yes" : "No"}</td>
									<td>{returnType}</td>
									<td><ul>{args?.map(({ name }, i) => <li key={i}>{name}</li>)}</ul></td>
									<td><ul>{args?.map(({ description }, i) => <li key={i}>{description}</li>)}</ul></td>
									<td><ul>{args?.map(({ type }, i) => <li key={i}>{type}</li>)}</ul></td>
									<td><ul>{args?.map(({ defaultValue }, i) => <li key={i}>{String(defaultValue)}</li>)}</ul></td>
									<td><ul>{args?.map(({ required }, i) => <li key={i}>{required ? "Yes" : "No"}</li>)}</ul></td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			)}

			{values.length > 0 && (
				<>
					<h3>Values</h3>

					<table className="custom-table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Description</th>
								<th>Required</th>
								<th>Type</th>
								<th>Default value</th>
							</tr>
						</thead>
						<tbody>
							{values.map(({ name, description, required, type, defaultValue }) => (
								<tr key={name}>
									<td>{name}</td>
									<td>{description}</td>
									<td>{required ? "Yes" : "No"}</td>
									<td>{type}</td>
									<td>{String(defaultValue)}</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			)}
		</>
	)
}

export default API
