import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserOrder, isPaid } from '../../../Services/orderService';
import { restoratUser } from '../../../store/auth-slice';
import { AppDispatch, RootState } from '../../../store/redux-store';
import OrderItem from '../OrderItem/OrderItem';
import { OrderResponse } from '../../../types';
import classes from './AllOrders.module.css';

export default function AllOrders() {
    const dispatch = useDispatch<AppDispatch>();
    const { user } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();
    const [orders, setOrders] = useState<{ order: OrderResponse; paid: boolean }[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                if (!user) {
                    await dispatch(restoratUser());
                }

                if (user) {
                    const data = await getUserOrder(user.id);
                    const ordersWithPaymentStatus = await Promise.all(
                        data.map(async (order) => {
                            if (order.id) {
                                const paid = await isPaid(order.id); // Vérifier si la commande est payée
                                return { order, paid }; // Retourner la commande et son statut de paiement
                            }
                        })
                    );
                    setOrders(ordersWithPaymentStatus.filter(Boolean) as { order: OrderResponse; paid: boolean }[]);
                }
            } catch (error) {
                console.error('Error fetching orders:', error);
                navigate('/auth');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [dispatch, user, navigate]);


    if (loading) {
        return <div>Loading orders...</div>;
    }

    return (
        <div className={classes.orderList}>
            {orders.map((order) => (
                <OrderItem
                    key={order.order.id}
                    order={order.order}
                    paid={order.paid}
                />
            ))}
        </div>
    );
}
