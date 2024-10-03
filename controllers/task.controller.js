


import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
    try {
        // const { title } = req.body;
        const createData = req.body;

        console.log('a ver', req.body);
        createData.taskId = createData.title.replaceAll(' ', '') + Date.now()
        const newTask = new Task(createData);
        await newTask.save();

        return res.status(201).json({ message: 'Tarea creada exitosamente', task: newTask });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al crear la tarea' });
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('users');
        return res.status(200).json([...tasks]);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener las tareas.' });
    }
};

export const getTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findOne({ taskId })
        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener la tarea.' });
    }
}
export const updateTask = async (req, res) => {
    try {
        const { taskId } = req.body; 
        const updatedData = req.body;
    
    const task = await Task.findOneAndUpdate(
      { taskId: taskId }, 
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la tarea', error });
  }
}