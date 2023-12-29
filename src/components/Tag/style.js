import styled from "styled-components";

export const Container = styled.span`
	font-size: 12px;
	padding: 5px 16px;
	border-radius: 8px;
	margin-right: 6px;
	font-weight: 400;
	background-color: ${({ theme }) => theme.COLORS.BLACK_600};
	color: ${({ theme }) => theme.COLORS.WHITE_100};
`;
