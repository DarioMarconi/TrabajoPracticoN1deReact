import React, { useEffect } from "react";
import {
	Grid,
	Paper,
	Box,
	Card,
	CardHeader,
	Avatar,
	IconButton,
	CardMedia,
	CardContent,
	CardActions,
	Checkbox,
	Typography,
	Link,
	Button,
	Stack,
} from "@mui/material";
import {
	Assignment,
	CatchingPokemon,
	Favorite,
	FavoriteBorder,
	MoreVert,
	Share,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { appSelector, appActions } from "../../redux/appRedux";

const Dashboard = () => {
	const dispatch = useDispatch();
	const todo = useSelector(appSelector.todo);
	useEffect(() => {
		dispatch(appActions.setPageTitle("TABLERO"));
	}, []);
	return (
		<Grid container spacing={3}>
			<Grid item md={12} xs={12}>
				<Paper sx={{ p: 2 }}>
					<Box>Dashboard</Box>
					<Stack direction="row" spacing={4} justifyContent="center" mt={5} mb={5}>
						<Box width="300px">
							<Card>
								<CardContent
									sx={{
										"&:hover": {
											backgroundColor: "#Fbf4eb",
										},
									}}
								>
									<Typography gutterBottom variant="h6" component="div">
										Tareas Completadas {todo.filter((t) => t.completed).length} de {todo.length}
									</Typography>
								</CardContent>
							</Card>
						</Box>
						<Box width="300px">
							<Card>
								<CardContent
									sx={{
										"&:hover": {
											backgroundColor: "#Fbf4eb",
										},
									}}
								>
									<Typography gutterBottom variant="h6" component="div">
										Tareas pendientes {todo.filter((t) => !t.completed).length} de {todo.length}
									</Typography>
								</CardContent>
							</Card>
						</Box>
					</Stack>
					<Stack direction="row" spacing={4} justifyContent="center" mt={5} mb={5}>
						<Box width="300px">
							<Card
								sx={{
									"&:hover": {
										backgroundColor: "#Fbf4eb",
									},
								}}
							>
								<CardMedia
									component="img"
									height="140"
									image="https://hablemosdeempresas.com/wp-content/uploads/sites/2/2020/03/lista-tareas-portada.jpg"
									alt="postit image"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Tareas
									</Typography>
									<Typography variant="body2" color="text.secondary">
										Gestiona todo tipo de tareas:
                                        Tareas laborales.
                                        Tareas académicas.
                                        Tareas personales.
									</Typography>
								</CardContent>
								<CardActions sx={{ justifyContent: "center" }}>
									<RouterLink to="/todo">
										<Button size="large" endIcon={<Assignment />}>
											Ir a las tareas
										</Button>
									</RouterLink>
								</CardActions>
							</Card>
						</Box>
						<Box width="300px">
							<Card
								sx={{
									"&:hover": {
										backgroundColor: "#Fbf4eb",
									},
								}}
							>
								<CardMedia
									component="img"
									height="140"
									image="https://tierragamer.com/wp-content/uploads/2022/05/Pokedex-dePokemon.jpg"
									alt="random image"
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										Fetch List
									</Typography>
									<Typography variant="body2" color="text.secondary">
										La Pokedex: Todos los datos de los pokemones de mas de una generacion.
									</Typography>
								</CardContent>
								<CardActions sx={{ justifyContent: "center" }}>
									<RouterLink to="/fetch-list">
										<Button size="large" endIcon={<CatchingPokemon />}>
											Ir a la pokedex
										</Button>
									</RouterLink>
								</CardActions>
							</Card>
						</Box>
					</Stack>
				</Paper>
			</Grid>
		</Grid>
	);
};
export default Dashboard;